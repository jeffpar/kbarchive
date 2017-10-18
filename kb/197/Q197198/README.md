---
layout: page
title: "Q197198: WD97: Address in Envelopes and Labels Blank or Shows Date/Text"
permalink: kb/197/Q197198/
---

## Q197198: WD97: Address in Envelopes and Labels Blank or Shows Date/Text

	Article: Q197198
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta kbenvelope word97 kbmerge
	Last Modified: 19-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When your letter or document contains an address and you click Envelopes and
	Labels on the Tools menu, the proposed address on the Envelope or Label tab may
	be blank, or it may include a date or other text.
	
	CAUSE
	=====
	
	Word will not propose the correct address in the Envelopes or Labels tab for the
	following reasons:
	
	NOTE: Non-printing characters used in this article:
	
	Non-printing Character     Description        Press These Keys
	--------------------------------------------------------------
	
	  <B6>                          Paragraph Mark     ENTER
	  <B7>                          Space              SPACE BAR
	  ->                         Tab                TAB
	
	To view the non-printing characters in your Word document, either click the
	Show/Hide (<B6>) button on the Standard toolbar, or click Options on the Tools
	menu, then on the View tab, click to select the All check box and click OK.
	
	Case 1: An Address Line Is Blank
	--------------------------------
	
	An address line is blank. For example, the street address is missing as in the
	following example:
	
	  <B6>
	Microsoft Corporation<B6>
	  <B6>
	Redmond, WA. 98052-6399<B6>
	  <B6>
	
	Case 2: The Address Contains Fields, Spaces, Tabs, Indentation, or Centered/Right-Alignment
	-------------------------------------------------------------------------------------------
	
	This problem may occur for the following reasons:
	
	- The address lines include a field. For example, the last address line
	  includes a DATE or TIME field:
	
	  <B6>
	  Microsoft Corporation<B6>
	  One Microsoft Way<B6>
	  Redmond, WA. 98052-6399 -> -> -> -> -> {DATE}<B6>
	  <B6>
	
	  -or-
	
	- One or more of the address lines include multiple spaces:
	
	  <B6>
	  Microsoft Corporation<B6>
	  One Microsoft Way<B6>
	  Redmond, WA. 98052-6399<B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B7><B6>
	  <B6>
	
	  -or-
	
	- The address lines begin with a tab:
	
	<B6>
	-> Microsoft Corporation<B6>
	-> One Microsoft Way<B6>
	-> Redmond, WA. 98052-6399<B6>
	<B6>
	
	  -or-
	
	- The address lines begin with a large indentation.
	
	<B6>
	  Microsoft Corporation<B6>
	  One Microsoft Way<B6>
	  Redmond, WA. 98052-6399<B6>
	<B6>
	
	  NOTE: Indentations greater than 1 inch usually cause this problem. To apply an
	  indentation, do one of the following:
	   - Click the Increase Indent button on the Formatting toolbar.
	
	     -or-
	
	   - On the Format menu, click Paragraph and then on the "Indents and Spacing"
	     tab, set the Indentation Left to the value you want.
	
	  -or-
	
	- The address is Centered-Aligned:
	
	<B6>
	                         Microsoft Corporation<B6>
	                           One Microsoft Way<B6>
	                        Redmond, WA. 98052-6399<B6>
	<B6>
	
	  -or-
	
	- The address is Right-Aligned:
	
	<B6>
	 Microsoft Corporation<B6>
	 One Microsoft Way<B6>
	 Redmond, WA. 98052-6399<B6>
	<B6>
	
	Case 3: Word Proposes an Address That Includes Too Much Text
	------------------------------------------------------------
	
	This problem occurs when any of the lines of the address include text that is
	separated from the address by tabs or if text or the DATE field (or any other
	field) is immediately above or below the address.
	
	This problem may occur when you do any of the following:
	
	- On the last line of the address, you press the TAB key several times, and
	  then the date is entered as text:
	
	  <B6>
	  Microsoft Corporation<B6>
	  One Microsoft Way<B6>
	  Redmond, WA 98052-6399 -> -> -> -> -> November 10, 1997<B6>
	  <B6>
	
	  -or-
	
	- When the date (or other text) is on a line immediately above or below the
	  address:
	
	  <B6>
	  November 10, 1997<B6>
	  Microsoft Corporation<B6>
	  One Microsoft Way<B6>
	  Redmond, WA 98052-6399<B6>
	  <B6>
	
	  -or-
	
	- When the Date (or other field) is on a line immediately above or below the
	  address:
	
	  <B6>
	  {DATE}<B6>
	  Microsoft Corporation<B6>
	  One Microsoft Way<B6>
	  Redmond, WA. 98052-6399<B6>
	  <B6>
	
	Case 4: Word Proposes Only the First Line of the Address
	--------------------------------------------------------
	
	This problem may occur when the paragraph that contains the address is formatted
	with Before or After spacing.
	
	WORKAROUND
	==========
	
	To work around this problem, do one of the following:
	
	- Remove any fields, spaces, tabs, or indentations from the address lines.
	
	  NOTE: Using fewer than 40 spaces, or indentations of 1 inch or less, seems to
	  work fine.
	
	  -or-
	
	- Type the date (or other text), or insert the DATE field (or other field),
	  either above or below the address lines, separating the text or field from
	  the address lines by a blank line.
	
	  NOTE: Do not include any additional text, fields, tabs, spaces, or
	  indentations on the same lines as the address.
	
	  -or-
	
	- Select the address paragraphs and press CTRL+Q on the keyboard. This resets
	  the paragraph formatting. Or, on the Format menu, click Paragraph, click to
	  select the Indents and Spacing tab and change the Before and After setting to
	  Zero (0).
	
	Additional query words: merge
	
	======================================================================
	Keywords          : kbdta kbenvelope word97 kbmerge 
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	Issue type        : kbprb
	Solution Type     : kbpending
	
	=============================================================================
	
