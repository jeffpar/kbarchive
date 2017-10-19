---
layout: page
title: "Q214623: PRB: Some SET CENTURY Options May Not Prevent Four Digit Dates"
permalink: /kb/214/Q214623/
---

## Q214623: PRB: Some SET CENTURY Options May Not Prevent Four Digit Dates

	Article: Q214623
	Product(s): Microsoft FoxPro
	Version(s): 3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbYear2000 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase
	Last Modified: 14-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0b, 5.0, 5.0a, 6.0 
	- Microsoft Visual FoxPro for Macintosh, version 3.0b 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The dates in text boxes might display the year with four digits even after
	issuing SET CENTURY OFF in any version of Visual FoxPro or issuing a SET CENTURY
	TO <value> ROLLOVER <value> in Visual FoxPro 5.0 or 6.0.
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	Beginning in Visual FoxPro 3.0, date values began appearing in four digits to
	prevent any confusion regarding the correct century. This feature is called
	Auto-Century. The Auto-Century feature ensures that any date written to a text
	box has the century the user intended.
	
	Auto-Century operates differently in various versions of Visual FoxPro. In Visual
	FoxPro 3.0x and later with SET CENTURY OFF in effect, the text box displays four
	digit dates whenever the year is greater than 1999. Visual FoxPro 5.0x and 6.0
	display a four digit date even after issuing a SET CENTURY TO <value>
	ROLLOVER <value> when the century portion of the date exceeds the SET
	CENTURY TO value. Auto-Century ignores the ROLLOVER value.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. In Visual FoxPro 3.0b, 5.0x, or 6.0, create a form with a text box called
	  Text1.
	
	2. Add a command button, and set the Caption property to 1959. In the Click
	  event of the object, add the following code:
	
	  ThisForm.Text1.Value={01/01/1959}
	
	3. Add a second command button and set the Caption property to 2029. In the
	  Click event of the object, add the following code:
	
	  ThisForm.Text1.Value={01/01/2029}
	
	4. Save the form and call it Zdatetest.
	
	5. Activate the Command window and issue a "SET CENTURY OFF" (without the
	  quotation marks) command.
	
	6. Run the form. Click the buttons and observe the textbox.
	
	The date appears in the text box in four digit form even though SET CENTURY is
	set off.
	NOTE: In Visual FoxPro 6.0, the Century property can be used to force a two-digit
	date by setting it to 0 - Off.
	To demonstrate how Auto-Century interacts with SET CENTURY TO <value>
	ROLLOVER <value> command, which is available in versions of Visual FoxPro
	after 3.0b, perform the following steps:
	
	1. Perform steps 1 through 4 listed above.
	
	2. Activate the Command window and issue a "SET CENTURY TO 19 ROLLOVER 70"
	  (without the quotation marks).
	
	3. Run the form.
	
	In Visual FoxPro 5.x, the text box displays four digits whenever the century
	portion of the year is greater than the SET CENTURY TO value. In Visual FoxPro
	6.0, the textbox displays four year digits for both dates. Visual FoxPro ignores
	the ROLLOVER value.
	
	Running the example in Visual FoxPro 5.0x, the textbox reports the first date
	{01/01/1959} as 01/01/59 because the century is equal to 19. However, 01/01/2029
	appears in four digit form since the century of this date is equal to 20 while
	SET CENTURY is set to 19. Note that the ROLLOVER value is ignored.
	
	Running the same example in Visual FoxPro 6.0 displays 01/01/1959 and 01/01/2029
	respectively.
	
	REFERENCES
	==========
	
	For additional information about the ROLLOVER keyword available in Visual FoxPro
	5.0x and later, please see the following articles in the Microsoft Knowledge
	Base:
	
	Q167186 PRB: SET CENTURY ROLLOVER Ignores Setting of SET CENTURY OFF
	
	Q162388 HOWTO: Prepare for the Year 2000
	
	Q190480 PRB: SET("Century",1) Not Reporting Correct Century
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbYear2000 kbvfp300b kbvfp500 kbvfp500a kbvfp600 kbXBase 
	Technology        : kbHWMAC kbOSMAC kbVFPsearch kbAudDeveloper kbVFP300bMac kbVFP300b kbVFP500 kbVFP600 kbVFP500a
	Version           : :3.0b,5.0,5.0a,6.0
	Issue type        : kbprb
	
	=============================================================================
	
