---
layout: page
title: "Q167675: BUG: Certain Non-US Characters Do Not Display Properly in VFP"
permalink: /kb/167/Q167675/
---

## Q167675: BUG: Certain Non-US Characters Do Not Display Properly in VFP

{% raw %}

	Article: Q167675
	Product(s): Microsoft FoxPro
	Version(s): 3.0,3.0b,5.0,5.0a,6.0
	Operating System(s): 
	Keyword(s): kbvfpkbbuglist
	Last Modified: 13-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 3.0, 3.0b, 5.0, 5.0a, 6.0, used with:
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Certain non-US characters do not appear correctly in Microsoft Visual FoxPro.
	When these fonts are chosen in the display, Microsoft Visual FoxPro displays
	them in an English font.
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	MORE INFORMATION
	================
	
	The following information is specific to a particular font but other non-US
	fonts exhibit the same behavior. Fonts that are known to have display problems
	are listed at the end of this article. This is not meant to be a comprehensive
	list.
	
	
	When you store information that is entered using the Greek language support in
	Windows 95 and in Windows NT 4.0, Microsoft Visual FoxPro does not display the
	Greek characters correctly.
	
	The following instructions assume that you have correctly installed Greek
	language support on your Windows 95 or Windows NT 4.0 system.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Create a new project with a new database.
	
	2. Create a new table with two character fields. The first character field will
	  store English characters, and the second character field will store Greek
	  characters.
	
	3. Create a form and put this table in the DATAENVIRONMENT.
	
	4. Drag each of the fields to the form to create text boxes.
	
	5. Click the text box that displays the Greek characters.
	
	6. In the Properties box, change the FontName property to Arial Greek.
	
	7. Save and run the form.
	
	8. Switch the international settings in Windows 95 to Greek, and then type some
	  text in the Greek TextBox. Note that the characters do not display correctly.
	
	9. Select the text that you typed in the Greek TextBox, and then copy the text.
	
	10. Paste the text in a Microsoft Word document, and then change the font to
	  Arial Greek. This displays the Greek text correctly.
	
	The following fonts may exhibit display problems:
	
	- Greek
	- Ukrainia
	- Russian
	- Wingdings
	
	Additional query words: International Localized kbvfp500 kbvfp600
	
	======================================================================
	Keywords          : kbvfp kbbuglist
	Technology        : kbVFPsearch kbAudDeveloper
	Version           : :3.0,3.0b,5.0,5.0a,6.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
