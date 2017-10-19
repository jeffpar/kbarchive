---
layout: page
title: "Q167655: WD97: Frequently Asked Questions About the Grammar Checker"
permalink: /kb/167/Q167655/
---

## Q167655: WD97: Frequently Asked Questions About the Grammar Checker

	Article: Q167655
	Product(s): Word 97 for Windows
	Version(s): WINDOWS:97
	Operating System(s): 
	Keyword(s): kbdta kbproof word97kbfaq
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SUMMARY
	=======
	
	This article answers the most frequently asked questions about the grammar
	checker that is included with Word 97.
	
	MORE INFORMATION
	================
	
	1. Q. What does it mean that Word 97 has a "natural language" grammar checker?
	
	  A. The grammar checker in Word 97 can do a more comprehensive and accurate
	  analysis (also known as "parsing") of the submitted text, instead of simply
	  using a series of heuristics (or pattern matching) to flag errors. The Word
	  97 grammar checker does text analysis at a syntactical level and at a deeper,
	  logical, level to understand the relationship between the actions and the
	  people, or things, doing those actions. For example, the Word grammar checker
	  analyzes the following complex sentence
	
	  The legend says that that Kingdom was created by three ancient magicians,
	  whose magical powers governed the world and made them immortal and
	  all-powerful.
	
	  and rewrites it from the passive to the active voice for clarity, while
	  setting off the relative clause between commas:
	
	  The legend says that three ancient magicians, whose magical powers governed
	  the world and made them immortal and all-powerful, created that Kingdom.
	
	2. Q. Who developed the Word 97 grammar checker?
	
	  A. The grammar checker is fully developed and owned by Microsoft.
	
	3. Q. What are the key differences between Word 97 grammar checker and other
	  grammar checkers?
	
	  A. One of the cornerstone differences between the grammar checker in Word 97
	  and other grammar checkers stems from the fact that the grammar checker in
	  Word 97 uses advanced parsing techniques to understand the sentence structure
	  while the other grammar checkers rely mainly on "pattern matching." By
	  pattern matching, we mean that the program uses a technique that matches the
	  checked text against patterns of text stored in an internal database.
	  Following are some sentences that highlight the superiority of the natural
	  language grammar checker in Word:
	
	   - He never learned to swim, or did he want to.
	
	     The Word grammar checker corrects "or" with the appropriate conjunction
	     "nor."
	
	   - She encourages Stephen more than Elisabeth.
	
	     The Word grammar checker corrects the sentences by proposing two possible
	     new sentences to make the original meaning less ambiguous.
	
	   - They wanted for us to move to Alaska.
	
	     Word grammar checker corrects the sentence by removing the preposition
	     "for."
	
	4. Q. What are the file names of the grammar checker files and where are they
	  installed?
	
	  A. Word (or Office) Setup installs the grammar checker by default. The English
	  grammar checker is comprised of two files
	
	  Msgren32.dll, and Msgr_en.lex,
	
	  both of which are installed in the "\Program Files\Common Files\Microsoft
	  Shared\Proof" folder.
	
	5. Q. How much memory do I need to have on my computer in order to run the
	  grammar checker automatically?
	
	
	  A. Word will enable the grammar checker automatically if your computer has
	  sufficient available memory. The method of grammar checking that is enabled
	  when you set up and first start Word depends on the amount of available
	  memory on your computer.
	
	  Manually Check Grammar (8 MB or More):
	
	  To run the grammar checker when you click Spelling And Grammar on the Tools
	  menu, your computer must have more than 8 megabytes (MB) physical RAM. If you
	  have less than 8 MB, the grammar checker is turned off by default when you
	  first start Word.
	
	  Automatically Check Grammar (12 MB or More):
	
	  To run the grammar checker constantly (to display grammatical errors with wavy
	  underlines), your computer must have at least 12 MB of physical RAM. If your
	  computer has less than 12 MB of RAM, the Hide Grammatical Errors check box is
	  selected when you first start Word. To turn on the automatic grammar
	  checking, click this check box to clear it (on the Tools menu, click Spelling
	  and Grammar, and click the Options button).
	
	  Note also that for all Western languages other than English, the automatic
	  grammar checker is turned off by default. (The English grammar checker is
	  shipped with all versions of Word.)
	
	6. Q. What are the registry entries for the grammar checker?
	
	  WARNING: If you use Registry Editor incorrectly, you may cause serious
	  problems that may require you to reinstall your operating system. Microsoft
	  cannot guarantee that you can solve problems that result from using Registry
	  Editor incorrectly. Use Registry Editor at your own risk.
	
	  A.
	
	  For Windows 95
	  --------------
	
	  Grammar User Settings Per User:
	
	         HKEY_CURRENT_USER\Software\Microsoft\Shared Tools\Proofing
	         Tools\Grammar\MSGrammar
	
	  Below this key, the grammar checker registers the grammar checker version
	  number (1.0 in the case of English), the language IDs, the key Writing style
	  (0 through 4) with the setting being the writing style names for the name,
	  and binary data for each rule/writing style for the data.
	
	  Grammar Machine Settings:
	
	         HKEY_LOCAL_MACHINE\Software\Microsoft\Shared Tools\Proofing
	         Tools\Grammar
	
	  Below this key are the language IDs (1033, 2057, 3081), the Normal style
	  attributes, and the values Dictionary and Engine which contain respectively
	  the fully qualified paths to the .lex and .dll files.
	
	  Just as with the other proofing tools, if the grammar checker files are
	  manually copied to their default locations, or to the Word folder, Word
	  auto-registers the grammar checker the first time it is used.
	
	7. Q. Why does the grammar checker flag words that shouldn't be flagged, and why
	  does it provide suggestions that are incorrect?
	
	  A. In general, the grammar checker will incorrectly mark words or propose
	  incorrect suggestions, when the parser (that is, the grammar checker
	  component that analyzes the linguistic structure of a sentence) cannot
	  determine the correct structure of the analyzed sentence.
	
	  Although state-of-the-art in its category, the grammar checker (just like any
	  other commercially-available grammar checker program) is not perfect.
	  Therefore, when you use the grammar checker, you can expect some amount of
	  "false" or "suspect" flagging and subsequent wrong suggestions.
	
	8. Q. Why can't the grammar checker spot mistakes in the phrase "We went two too
	  stores, to . . ."?
	
	  A. The grammar checker is designed to catch the kinds of errors that ordinary
	  users make every day. You will always be able to make up sentences that will
	  confuse the grammar checker.
	
	9. Q. When the grammar checker is running in the background (wavy underlines),
	  why does it flag errors in a different order than when I click Spelling And
	  Grammar on the Tools menu (run the grammar checker in the foreground)?
	
	  A. With the background grammar checker, trying to achieve a logical
	  left-to-right flow is not as critical as it is for the grammar checker that
	  you run manually (click Spelling And Grammar on the Tools menu). Therefore,
	  for the background grammar checker, the error marked first is always the one
	  that returns a suggestion, regardless of its position in the sentence.
	
	10. Q. Why is Ignore All not working as expected? For example, if I click Ignore
	  All for this sentence labeled as fragment
	
	  After serving lunch.
	
	  in the same grammar checker session, the grammar checker stops on other
	  sentences that are labeled as fragments, for example:
	
	  Over my dead body.
	
	  The grammar checker categorizes (internally) these two sentences as different
	  types of fragments, and in the above examples, grammar checker is ignoring
	  one of those types, but not the other. Thus the inconsistency of how Ignore
	  All works.
	
	11. Q. Why aren't mistakes flagged in left-to-right sequence? For example:
	
	  But the army, however, went on with it's plan.
	
	  A. In most cases, the Grammar checker tries to flag errors from left-
	  to-right. However, In some cases this is not possible because the grammar
	  checker wants you to correct the most logical mistake first (this mistake
	  may not be the first mistake). In this case, punctuation or spacing mistakes
	  are flagged before specific or confined grammar checker mistakes.
	
	12. Q. Why are some passive sentences flagged and rewritten by grammar checker,
	  while others are skipped?
	
	  NOTE: This problem occurs with other rules in addition to the
	  Passive-construction rule.
	
	  For example, the following passive sentence is not flagged:
	
	  The term of this Agreement shall commence on the Effective Date and shall
	  continue until terminated by Volcano Coffee in writing at any time, with or
	  without cause.
	
	  A. For certain types of sentences, when there is no clear syntactic subject,
	  the grammar checker will not attempt to flag the sentence.
	
	13. Q. When I right-click a grammar error (an error marked with a wavy
	  underline), why doesn't the shortcut menu display the same options that are
	  available in the Spelling And Grammar dialog box? For example, if an item is
	  flagged, but if the grammar checker does not provide a suggestion, the only
	  options available are to ignore the sentence (and possibly miss other errors
	  in that sentence) or to click the Grammar command to invoke the Spelling And
	  Grammar dialog box.
	
	  A. For the background mode (wavy underlines), the grammar checker uses a
	  simplified interface. If you want to view all the possible errors in a given
	  sentence, you must click Grammar on the on the shortcut menu.
	
	14. Q. Why do some pairs of words that are commonly confused work in one
	  direction only? For instance, in the grammar checker both flea and flee are
	  flagged as commonly confused words, but with the pair your and you're, only
	  the word "your" is flagged as a commonly confused word.
	
	  A. The grammar checker handles some commonly confused word pairs in a
	  unidirectional way to simplify the problem for the parser. The grammar
	  checker is designed this way to reduce the number items that are flagged by
	  the grammar checker but that are not true grammatical errors.
	
	15. Q. Why is it that when a sentence is flagged as being too long, that's the
	  only advice given for the sentence?
	
	  A. Long sentences are often difficult to read both for people and for the
	  grammar checker. The grammar checker is not sophisticated enough to detect
	  grammatical errors in long sentences. If you are in doubt about the
	  grammatical accuracy of a long sentence, you should break it up into smaller
	  sentences.
	
	16. Q. Why does the grammar checker ignore text enclosed in quotation marks? For
	  example, this text is ignored
	
	  He said, "what on earth were you thinking of?"
	
	  while in the following text, "what on earth" is flagged:
	
	  He said, what on earth were you thinking of?
	
	  A. The grammar checker assumes that text in a direct quotation should not be
	  critiqued.
	
	17. Q. Why does the grammar checker ignore text in subdocuments such as,
	  headers, footers, and annotations?
	
	  A. By design, the grammar checker does not analyze text in headers, footers,
	  or annotations. Headers and footers typically do not contain complete
	  sentences. Similarly, annotations may be written in sentence fragments, and
	  are not suitable for grammar checking.
	
	18. Q. Why can't I set options such as the length of sentence?
	
	  A. This option is built-in to the selected writing style. To change the
	  acceptable sentence length, change the selected writing style. The grammar
	  options that are built in to the writing style include:
	
	   - Length of long sentence
	   - Allowable number of noun modifiers
	   - Allowable number of consecutive prepositional phrases
	   - Allowable number of words to split infinitive
	   - Use of the first person pronoun
	
	  NOTE: Available in the grammar checker only when the Technical style is
	  selected.
	
	  The following table lists the specific values for the invisible options.
	
	                                           Writing Style
	                                           -------------
	        Invisible Option       Casual  Standard  Formal  Technical  Custom
	        ------------------------------------------------------------------
	
	        Length of long
	        sentence                  50       50       40        40        40
	
	        Allowable number of
	        noun modifiers             5        4        3         3         4
	
	        Allowable number of
	        consecutive prepositional
	        phrases                    5        4        3         3         4
	
	        Allowable number of words
	        to split infinitive        3        2        1         1         2
	
	        Technical writing
	        critiques                 off      off      off        on      off
	
	19. Q. What do the grammar statistics mean?
	
	  A. The Flesch Reading Ease calculates how easy it is to read the document.
	  The higher the score (on a scale of 0 to 100), the easier it is to
	  understand the document.
	
	  The Flesch-Kincaid Grade Level provides the writer of the document with a
	  value that indicates the minimum education level required for the reader to
	  be able to understand the document. The lower the score, the easier it is to
	  understand the document (scale is 0 to 12).
	
	  What formulas are these statistics based on?
	
	  The Flesch Reading Ease score is based on the number of words in each
	  sentence that is grammar checked, and the average syllable per word. The
	  Flesch Reading Ease score rates text on a 100-point scale; the higher the
	  score, the easier it is to understand the document.
	
	  The formula for the Flesch Reading Ease score is
	
	  206.835 - (1.015 x <ASL>) - (84.6 x <ASW>)
	
	  where <ASL> is the average sentence length (number of words/number of
	  sentences) and <ASW> average number of syllables per word (number of
	  syllables/number of words).
	
	  The Flesch-Kincaid Grade Level score is very similar to the above, and it
	  measures readability as a grade level.
	
	  The formula for the Flesch-Kincaid Grade Level is:
	
	  Grade Level = (.39 x <ASL>) + (11.8 x <ASW>) - 15.59
	
	  Who uses them?
	
	  Various government agencies require that the readability of specific
	  documents or forms meet specific readability standards. For example, some
	  states require insurance forms to have a specified readability score.
	
	20. Q. How many words and phrases are in the grammar dictionary?
	
	  A. The grammar dictionary includes approximately 99,000 words and phrases, in
	  their uninflected form (that is, this number does not include words such as
	  "went," "children," and so on, which are the inflected forms of "go" and
	  "child."
	
	21. Q. What is the grammar dictionary based on?
	
	  A. It is based on the "Longman Dictionary of Contemporary English," and the
	  "American Heritage Dictionary of the English Language," third edition.
	
	22. Q. How is the English grammar checker different if I run it on U.K. English
	  text versus U.S. English?
	
	  A. The difference between proofing UK English text and US English is
	  primarily in the spelling variances of the words in the two languages, for
	  example, "colour" as opposed to "color." These variances do not have any
	  effect on grammar.
	
	  The vast majority of the grammar rules apply to all English text (U.S. and
	  U.K.). However, there are just a few grammar rules that differ depending on
	  the selected language:
	
	  a. Plural premodifiers that are very commonly used in U.K. English, are not
	     flagged for U.K. English, but are for U.S. English as in the following
	     example:
	
	  This is a trades union. We have done all the contents scanning.
	
	  b. Subject-verb agreement with collective nouns where the verb is used in the
	     plural form are not flagged in U.K. English, but are flagged in US
	     English. as in the following example:
	
	  The team are planning to mobilize soon.
	
	
	23. Q. Some of the explanations don't seem to be related to the flagged mistake.
	  For example, in the sentence
	
	  Lets go home now.
	
	  the explanation in the grammar checker does not mention specifically the
	  confusable pair lets/let's.
	
	  A. The grammar explanations are intended to cover the most general cases
	  within each rule in order to avoid crowding the screen text.
	
	Additional query words: 8.0 FAQ
	
	======================================================================
	Keywords          : kbdta kbproof word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : WINDOWS:97
	Issue type        : kbinfo
	
	=============================================================================
	
