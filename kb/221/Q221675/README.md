---
layout: page
title: "Q221675: FIX: Problem Converting FP2.6 Screens With Large Labels &amp; @SAYs"
permalink: /kb/221/Q221675/
---

## Q221675: FIX: Problem Converting FP2.6 Screens With Large Labels &amp; @SAYs

	Article: Q221675
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbOOP kbMiscTools kbvfp600 kbvfp600bug kbXBase kbvfp600sp3 kbGrpDSFox
	Last Modified: 26-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message is received when converting a FoxPro 2.6 for Windows
	screen to a Visual FoxPro 6.0 form.:
	
	  WARNING - Expression too long at Record #<record number>.
	  The expression was not converted. See the log file for details.
	
	CAUSE
	=====
	
	This is known to happen if the FoxPro 2.6 screen has a large label on it.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	This bug was corrected in Visual Studio 6.0 Service Pack 3.
	
	For more information about Visual Studio service packs, please see the following
	articles in the Microsoft Knowledge Base:
	
	Q194022 INFO: Visual Studio 6.0 Service Packs, What, Where, Why
	
	Q194295 HOWTO: Tell That Visual Studio 6.0 Service Packs Are Installed
	
	MORE INFORMATION
	================
	
	In FoxPro 2.6, a label is created with the Screen Designer tool button with the
	capital A on it. The screen generator generates this into an @...SAY in the .spr
	file it creates. An @...SAY or output field can also be created with the FoxPro
	2.6 Screen Designer tool button with the ab| symbol on it and choosing the
	Output Field(Say) option button in the Field dialog box. This later type of
	@...SAY will convert into a text box control in Visual FoxPro rather than a
	label control. Text box controls do not have caption properties.
	
	If the FoxPro 2.6 label is over approximately 221 characters (including two
	carriage returns), the error message listed above will be produced and the
	caption property of the label control will just be Label1, or what ever label
	number it is, when the screen is converted. The reason that two carriage return
	characters are included is because it is very hard to visually fit more than
	about 108 characters on a label line without pressing the ENTER key to create a
	new line for the label.
	
	In FoxPro 2.6, the maximum number of characters that could be entered for a label
	varied depending on how many carriage returns there were. Each time the ENTER
	key was pressed, a carriage return character (CHR(13)) was entered into the
	label text. If there are two carriage returns, the maximum number of other
	characters that could be entered was 252. If there are five carriage returns,
	the maximum number of characters that could be entered was 249. Therefore, in
	FoxPro 2.6, the maximum length of a label was 254 characters with a carriage
	return counting as a character. A line feed character was not added with the
	carriage return when the ENTER key was pressed.
	
	Some FoxPro 2.6 developers might have long labels on their screens as text
	instructions or descriptions for their applications.
	
	The Convert.app or the converter for Visual FoxPro has been updated in Visual
	Studio 6.0 Service Pack 3 to allow for label captions up to 254 characters,
	including the carriage returns. What happens in the new Convert.app is that the
	label caption from the FoxPro 2.6 form is truncated at 254 characters. The
	character count includes a character for each carriage return. Then the carriage
	return characters are removed.
	
	Therefore, a FoxPro 2.6 label caption of 254 characters that includes five
	carriage returns will turn into a label caption of 249 characters after being
	converted. In Visual FoxPro, the maximum length of a label caption is 254
	characters. Some FoxPro 2.6 labels that do not have many carriage returns may
	have the last few characters truncated. For instance, a label of 254 characters
	that includes just two carriage returns has the last two characters truncated
	and the Visual FoxPro label caption is only 250 characters after the carriage
	returns are removed.
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create a screen in FoxPro 2.6 for Windows and put a label on it with as many
	  characters as it will allow to be typed it. Press the ENTER key when needed
	  to create new lines.
	
	2. Save the screen. You may want to count the number of characters that were
	  typed in.
	
	3. Open the screen in Visual FoxPro 6.0. Do a Functional conversion when
	  prompted to convert the form.
	
	Additional query words:
	
	======================================================================
	Keywords          : kbOOP kbMiscTools kbvfp600 kbvfp600bug kbXBase kbvfp600sp3 kbGrpDSFox 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
