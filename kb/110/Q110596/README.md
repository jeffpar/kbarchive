---
layout: page
title: "Q110596: Font Assistant: What Are .FIF Files?"
permalink: /kb/110/Q110596/
---

## Q110596: Font Assistant: What Are .FIF Files?

{% raw %}

	Article: Q110596
	Product(s): Microsoft Windows Printing Issues
	Version(s): ; WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 07-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft TrueType Font Pack II 
	- Microsoft Windows versions 3.1, 3.11 
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Font Assistant, which is included with the Microsoft TrueType Font Pack 2,
	manages all TrueType fonts on the system. Within Font Assistant, you can view
	historical and detailed information on individual fonts. This information is
	stored in font information files (.FIFs) in the Windows SYSTEM subdirectory.
	
	These files are installed during installation of the TrueType Font Pack 2. If an
	.FIF file is removed, it does not affect performance of the associated font.
	
	NOTE: Not all fonts have a corresponding .FIF file.
	
	MORE INFORMATION
	================
	
	Font information files are in text format. To view the contents of these files
	in Font Assistant, select the Font Information button.
	
	When you choose Print Samples in Font Assistant, a complete page is printed for
	each font, showing all the font information from the .FIF file as well as all
	the keyboard characters and sample lines of text in several point sizes.
	
	The following is an example of an .FIF file:
	
	[enu]
	L1=Augsburger Initials
	L3=The basic Augsburger typeface, first issued by at least two German
	  foundries in the
	L4=last century, contains the lower-case alphabet and numerals, as
	  well as caps. The
	L5=Initial variation has been limited to caps, however. To pander to
	  modern sensibilities,
	L6=we added accented caps as well.
	L8=Although you are never likely to use more than a letter or two at
	  a time, we?ve included
	L9=Augsburger Initials in this font pack to show what can be done with
	  TrueType. For when
	L10=the original was made, nobody had any idea that Augsburger would
	  some day be
	L11=reproduced at a computer from a computer keyboard.
	Lmax=12
	
	
	Additional query words: wfw wfwg 3.10 2.00 tt true type 3.11
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbWFWSearch kbZNotKeyword3 kbWin310 kbWin311 kbWFW310 kbWFW311 kbTTFontSearch
	Version           : :; WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
