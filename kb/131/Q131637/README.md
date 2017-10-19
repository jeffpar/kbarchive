---
layout: page
title: "Q131637: PC Win: Viewing Windows Characters in Mail Messages"
permalink: /kb/131/Q131637/
---

## Q131637: PC Win: Viewing Windows Characters in Mail Messages

	Article: Q131637
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 08-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for Windows, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The default display fonts used by Microsoft Mail for Windows do not include
	graphic representations of certain characters in the standard Microsoft Windows
	character set. As a result, messages containing these characters may be
	difficult to read when they are displayed.
	
	This article explains how to ensure that all characters in the Microsoft Windows
	character set are displayed correctly.
	
	MORE INFORMATION
	================
	
	Beginning with Microsoft Windows version 3.1, a number of new characters were
	added to the standard Windows character set. These new characters do not have
	graphic representations in all Windows fonts, and they may not display correctly
	when these fonts are used. Two of the fonts in this category are the default
	Microsoft Mail display fonts.
	
	Some of the most frequently used characters that produce the problem are as
	follows:
	
	- smart quotes: typographic opening and closing quotation marks (147 and 148
	  decimal)
	
	- typographic apostrophe (146 decimal)
	
	- uppercase and lowercase "OE" ligatures (140 and 156 decimal)
	
	- trademark symbol (153 decimal)
	
	NOTE: All of the Windows characters that produce the problem have decimal values
	between 128 and 159 inclusive.
	
	These new characters are displayed as slender, vertical black rectangles in the
	default Microsoft Mail character fonts, and in most other fonts that do not
	provide graphic representations for them.
	
	NOTE: Microsoft Mail handles and preserves these characters correctly internally;
	only the display of the characters is incorrect.
	
	If you use or encounter these special characters in your messages and wish to
	display them correctly, you must change the display fonts used by the Windows
	client to fonts that include graphic representations of these characters. You
	can accomplish this by making a slight modification to either the MSMAIL.INI
	file (if you are using Windows 3.1 or Windows for Workgroups) or the Microsoft
	Mail key structure in the Registry (if you are using Windows NT).
	
	Selecting a Font
	----------------
	
	Before you modify the MSMAIL.INI file or the Registry, you should decide which
	fonts you wish to use for display of messages. The fonts you select should
	include representations of the special characters you wish to display. All
	TrueType fonts sold by Microsoft (as part of Windows or as optional font packs)
	include representations of the complete Windows character set. As a result, a
	Microsoft TrueType font is always a good choice.
	
	Fonts other than TrueType fonts, shareware or freeware TrueType fonts, and
	TrueType fonts provided by other vendors may or may not provide the complete
	character set. If you prefer not to use Microsoft TrueType fonts, examine the
	fonts you are considering with the Character Map application, and verify that
	the characters you want to be able to display are represented correctly.
	
	NOTE: If you are running Windows NT, be sure to select the "Windows characters"
	subset when you examine the font in the Character Map window.
	
	Changing the Microsoft Mail Fonts
	---------------------------------
	
	Changing the Display Fonts in Windows 3.1x:
	
	Under Windows 3.1 and Windows for Workgroups, you can specify the fonts to be
	used by Mail for displaying messages using the NormalFont and FixedFont entries
	in the [Microsoft Mail] section of the MSMAIL.INI file. Both entries have the
	same format. Examples of both are shown below:
	
	  [Microsoft Mail]
	  NormalFont=Arial,10,0,0
	  FixedFont=Courier New,10,0,0
	
	The first field of each entry is the name of the font to be used by Mail. The
	second field is the font size. The third field is a boldface indicator. If it is
	set to 0, boldface is disabled; if it is set to 1, boldface is enabled. The
	fourth field is an italic indicator, and functions in the same way as the
	boldface indicator.
	
	Changing the Display Fonts in Windows NT:
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Under Windows NT, you can specify the fonts to be used by Mail for displaying
	messages by adding the NormalFont and FixedFont values to the Microsoft Mail key
	structure of the Registry, using the Registry Editor. Both values have the same
	data format. Examples of both are shown below:
	
	  Key: <hive>/Software/Microsoft/Mail/Microsoft Mail
	
	      Value        Type          Data
	
	  NormalFont      REG_SZ    Arial,10,0,0
	  FixedFont       REG_SZ    Courier New,10,0,0
	
	The first field of each value is the name of the font to be used by Mail. The
	second field is the font size. The third field is a boldface indicator. If it is
	set to 0, boldface is disabled; if it is set to 1, boldface is enabled. The
	fourth field is an italic indicator, and functions in the same way as the
	boldface indicator.
	
	Information Common to Both Windows and Windows NT
	-------------------------------------------------
	
	For both the Windows entries and the Windows NT values, NormalFont specifies the
	font to be used to display message text normally, and FixedFont specifies the
	font to be used to display message text when from the View menu, you choose the
	Change Font option. The Change Font option is used to change to an alternate
	font.
	
	Typically, NormalFont specifies a proportional font, and FixedFont specifies a
	fixed-pitch font; however, this is not required, and you can specify a fixed
	font as your normal font, or a proportional font as your alternate font, or
	both, if you wish.
	
	The values shown in the examples above will provide roughly the same appearance
	in displayed messages as that provided by the default Microsoft Mail fonts,
	except that the entire Windows character set will be displayed correctly. Of
	course, you need not follow these examples exactly; you can specify the font,
	font size, and boldface/italic indicators of your choice.
	
	The display font settings you select have no effect on the fonts used for
	printing messages, nor do they have any effect on the way other people will see
	your messages displayed in their mailboxes.
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMail320
	Version           : WINDOWS:3.2
	
	=============================================================================
	
