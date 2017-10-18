---
layout: page
title: "Q264787: WD97: Blank Line Is Not Suppressed in a Conditional Mail Merge"
permalink: kb/264/Q264787/
---

## Q264787: WD97: Blank Line Is Not Suppressed in a Conditional Mail Merge

	Article: Q264787
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 kbfield word97 kbmerge
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	By default, Microsoft Word suppresses blank lines in a mail merge when the
	result of a MERGEFIELD is blank.
	
	However, when you perform a conditional mail merge, the result of a conditional
	field may be blank. This causes an extra blank line.
	
	For example, in a mail merge, you may want to display a special message for
	residents of a particular state and not display that message to residents of
	other states. You might create a letter main document that looks similar to the
	following example:
	
	  {<B7>MERGEFIELD<B7>NAME<B7>}<B6>
	  {<B7>MERGEFIELD<B7>ADDRESS1<B7>}<B6>
	  {<B7>MERGEFIELD<B7>CITY<B7>},<B7>{<B7>MERGEFIELD<B7>STATE<B7>}<B7>{<B7>MERGEFIELD<B7>POSTALCODE<B7>}<B6>
	<B6>
	  Dear<B7>{<B7>MERGEFIELD<B7>NAME<B7>},<B6>
	<B6>
	  {<B7>IF<B7>{<B7>MERGEFIELD<B7>STATE<B7>}<B7>=<B7>"WA"<B7>"For<B7>Washington<B7>state<B7>residents,<B7>
	  we<B7>offer<B7>special<B7>rates<B7>to<B7>the<B7>Far<B7>East<B7>and<B7>Japan."}<B6>
	<B6>
	  <Body of letter...>
	
	When you perform the merge, the merged document for a resident of Washington
	state may appear correctly as the following:
	
	  Name<B6>
	  Address<B6>
	  City,<B7>State<B7>PostalCode<B6>
	<B6>
	  Dear<B7>Name,<B6>
	<B6>
	  For<B7>Washington<B7>state<B7>residents,<B7>we<B7>offer<B7>special<B7>rates<B7>to<B7>the<B7>Far<B7>East<B7>and<B7>Japan.<B6>
	<B6>
	  <Body of letter...>
	
	But the merged document for a resident of a different state may appear as the
	following:
	
	  Name<B6>
	  Address<B6>
	  City,<B7>State<B7>PostalCode<B6>
	<B6>
	  Dear<B7>Name,<B6>
	<B6>
	<B6>
	<B6>
	  <Body of letter...>
	
	The result for a non-Washington state resident is additional space (blank lines)
	between the greeting and the body of the letter.
	
	This article demonstrates how to use an IF field as a conditional statement to
	evaluate the results of the field and suppress the line, if the result is blank.
	
	MORE INFORMATION
	================
	
	This article provides two examples of how to use a conditional statement to
	suppress the extra line when the result is blank. Use the following examples as
	appropriate in your situation.
	
	Example 1:
	
	To correct the problem as described in the "Summary" section of this article, use
	an IF field as a conditional statement that compares whether a MERGEFIELD meets
	a certain value, as in the following example:
	
	  {<B7>IF<B7>{<B7>MERGEFIELD<B7>}<B7>=<B7>"<value>"<B7>"True"<B7>"False"<B7>}<B6>
	
	This conditional IF field states that if the MERGEFIELD is equal to
	<value>, do the True part; otherwise, do the False part.
	
	If the condition is met, the conditional statement inserts the text "Dear NAME,
	For Washington state residents, we offer special rates to the Far East and
	Japan." as you specified; however, if the condition is not met, only the
	greeting "Dear NAME," appears.
	
	Use the following example to suppress the message to Washington state residents
	when the MERGEFIELD STATE is not equal to WA:
	
	  {<B7>MERGEFIELD<B7>NAME<B7>}<B6>
	  {<B7>MERGEFIELD<B7>ADDRESS1<B7>}<B6>
	  {<B7>MERGEFIELD<B7>CITY<B7>},<B7>{<B7>MERGEFIELD<B7>STATE<B7>}<B7>{<B7>MERGEFIELD<B7>POSTALCODE<B7>}<B6>
	<B6>
	  {<B7>IF<B7>{<B7>MERGEFIELD<B7>STATE<B7>}<B7>=<B7>"WA"<B7>"Dear<B7>{<B7>MERGEFIELD<B7>NAME<B7>},<B6>
	<B6>
	  For<B7>Washington<B7>state<B7>residents,<B7>we<B7>offer<B7>special<B7>rates<B7>to<B7>the<B7>Far<B7>East<B7>and<B7>Japan."<B7>"Dear<B7>{<B7>MERGEFIELD<B7>NAME<B7>},"}
	
	Example 2:
	
	Microsoft Word suppresses blank lines when the result of a MERGEFIELD is blank.
	This is especially useful in an address. Word suppresses the blank line when the
	result of the MERGEFIELD on that line is blank.
	
	NOTE: There must not be any additional text, punctuation, spaces, or fields on
	the same line that contains the MERGEFIELD.
	
	However, there may be some occasion when you need to use a conditional statement
	in an address. This example demonstrates how to suppress the second address
	line, if the result of ADDRESS2 is blank.
	
	If your address list contains some records that have a second line for the
	address (ADDRESS2) and some records that do not have a second line, a blank line
	may result in your address, as in the following example:
	
	  Microsoft Corporation
	  One Microsoft Way
	
	  Redmond, WA 98052-6399
	
	To correct this problem, use an IF field as a conditional statement that compares
	whether a MERGEFIELD meets a certain value, as in the following example:
	
	  {<B7>IF<B7>{<B7>MERGEFIELD<B7>}<B7><><B7>""<B7>"True"<B7>"False"<B7>}<B6>
	
	This conditional IF field states that if the MERGEFIELD is not equal to nothing,
	do the True part; otherwise, do the False part.
	
	If the condition is met, the conditional statement inserts the results of the
	field (ADDRESS2) as you specified; however, if the condition is not met, the
	results of the False part of the statement appear.
	
	Use the following example to suppress the second address line when the result of
	the ADDRESS2 MERGEFIELD is blank:
	
	  {<B7>MERGEFIELD<B7>NAME<B7>}<B6>
	  {<B7>MERGEFIELD<B7>ADDRESS1<B7>}<B6>
	  {<B7>IF<B7>{<B7>MERGEFIELD<B7>ADDRESS2<B7>}<B7><><B7>""<B7>"{<B7>MERGEFIELD<B7>ADDRESS2<B7>}<B6>
	  {<B7>MERGEFIELD<B7>CITY<B7>}<B7>{<B7>MERGEFIELD<B7>STATE<B7>}<B7>{<B7>MERGEFIELD<B7>POSTALCODE<B7>}"<B7>
	  "{<B7>MERGEFIELD<B7>CITY<B7>}<B7>{<B7>MERGEFIELD<B7>STATE<B7>}<B7>{<B7>MERGEFIELD<B7>POSTALCODE<B7>}"}
	
	Non-Printing Characters Used in This Article:
	
	Character   Description      Press These Keys
	------------------------------------------------
	
	  <B7>        Space            Press SPACEBAR
	  <B6>        Paragraph Mark   Press ENTER
	  {}       Field Braces     Press CTRL+F9
	
	To view these non-printing characters in your Word document, do the following:
	
	1. On the Tools menu, click Options.
	
	2. On the View tab, click to select the Field Codes check box (listed in the
	  Show section) and the All check box (listed in the "Nonprinting characters"
	  section).
	
	3. Click OK to close the Options dialog box.
	
	REFERENCES
	==========
	
	For additional information about how to suppress blank lines in a mail merge,
	click the article number below to view the article in the Microsoft Knowledge
	Base:
	
	  Q264723 WD97: How to Suppress Blank Lines During a Mail Merge
	
	For additional information about a similar problem in which Word may not suppress
	blank spaces for a conditional statement in a mail merge, click the article
	number below to view the article in the Microsoft Knowledge Base:
	
	  Q72441 WD97: Suppressing Blank Spaces in a Print Merge (Mail Merge)
	
	For more information about a conditional IF field, click "Contents and Index" on
	the Help menu, click the Index tab in Microsoft Word Help, type the following
	text
	
	  IF field
	
	and then double-click the selected text to go to the "Specify multiple conditions
	with an IF field" topic. If you are unable to find the information you need, ask
	the Office Assistant.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbdta word8 kbfield word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
