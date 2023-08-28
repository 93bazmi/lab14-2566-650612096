"use client";
import {
  Container,
  Rating,
  Text,
  Textarea,
  Title,
  Button,
  Divider,
  Group,
  Pagination,
} from "@mantine/core";

export default function FoodReviewPage() {
  return (
    <Container size="600px">
      <Title order={2}>Food Review 🍕</Title>

      <Title order={4} mt="sm">
        Your rating
      </Title>
      <Rating size="lg" />

      <Textarea
        label="Your review"
        placeholder="Do you enjoy eating?"
        mt="xs"
        minRows={3}
      ></Textarea>

      <Button mt="xs" color="orange">
        Submit Review
      </Button>

      <Divider mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}>Elon Musk</Title>
        <Rating value={5} />
      </Group>
      <Text c="dimmed" align="center">
        Best pizza in this world. I give you X score.
      </Text>

      <Divider mt="sm" />
      <Group position="center" mt="sm">
        <Title order={4}>Mark Zuck</Title>
        <Rating value={4} />
      </Group>
      <Text c="dimmed" align="center">
        My favourite part is pepperoni
      </Text>
      <Group position="center" mt="md">
        <Pagination color="orange" total={20} />
      </Group>
      <Text align="center" color="dimmed" my="sm">
        Copyright © 2023 Purinee Montree 650612096
      </Text>
    </Container>
  );
}
