---
layout: page
title: "Q75613: In CodeView, Strings Not Watchable Beyond Null (0) Character"
permalink: /kb/075/Q75613/
---

## Q75613: In CodeView, Strings Not Watchable Beyond Null (0) Character

{% raw %}

	Article: Q75613
	Product(s): Microsoft Programming Utilities
	Version(s): 2.2,3.11,4.0,4.0b,4.5,7.0,7.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft CodeView for MS-DOS, versions 2.2, 3.11 
	- Microsoft CodeView for OS/2, versions 2.2, 3.11 
	- Microsoft BASIC Professional Development System (PDS) for MS-DOS, versions 7.0, 7.1 
	- Microsoft Basic Professional Development System (PDS) for MS-OS/2, version 7.1 
	- Microsoft QuickBASIC, versions 4.0, 4.0b, 4.5, on platform(s):
	   - the operating system: MS-DOS 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article documents a limitation of Microsoft CodeView's Watch feature when
	viewing Basic string expressions. A fixed-length or variable-length string
	containing a null character is only watchable up to the null character under
	CodeView. Any text beyond the null character is not watchable. This is not a
	problem with CodeView, but rather a design limitation.
	
	This information applies to Microsoft CodeView versions 2.2 and 3.1 for MS-DOS
	and MS OS/2; Microsoft Basic Professional Development System (PDS) versions 7.0
	and 7.1 for MS-DOS and version 7.1 for MS OS/2; and Microsoft QuickBasic
	versions 4.0, 4.0b, 4.5 for MS-DOS. (Note: CodeView is not shipped with
	QuickBasic 4.x products).
	
	MORE INFORMATION
	================
	
	A null character is a byte with an ASCII value of 0, such as returned by the
	Basic function CHR$(0). (Note that null bytes serve as the standard string
	terminator in the Microsoft C language.)
	
	CodeView interprets a null character as a null terminator for a string. Any
	attempt to display a string expression containing null characters in the Watch
	window of CodeView will result in a display of the string truncated at the null
	character. For example, if a null character is the first character of a string,
	an empty string ("") will be displayed in the Watch window for the string.
	
	Example 1
	---------
	
	An example of this behavior can be demonstrated in the following one line code
	example:
	
	     message$ = "Hi" + CHR$(0) + "there"
	
	If a watchpoint is set for message$ from within CodeView, the text displayed in
	the Watch window for message$ will be "Hi". However, if the variable message$ is
	printed as output, the displayed output will be Hi there.
	
	Example 2
	---------
	
	In the following example for fixed-length strings, CodeView will not display any
	text:
	
	1. A fixed-length string is DIMensioned, but not initialized or assigned to a
	  value.
	
	2. The MID$ statement is used to place a string fragment at any point after the
	  first character position of the fixed-length string.
	
	3. A watchpoint is set for the string under CodeView.
	
	When you first dimension a fixed-length string, it contains null characters, not
	spaces. When you use the MID$ statement to place a string fragment within the
	fixed-length string at any point after the first character position, a null byte
	(which CodeView treats as a string terminator) is left as the first character.
	If you set a Watchpoint for the string under CodeView, an empty string will be
	displayed in the Watch window. However, the embedded string fragment will still
	be part of the string and can be printed to the screen as output.
	
	The following is a code example that demonstrates the behavior described above:
	
	  DIM temp AS STRING * 20
	  MID$(temp,5,3) = "abc"
	  PRINT temp
	
	This code puts "abc" starting at the fifth character position of the variable
	temp. However, if you view the contents of temp within a Watch window of
	CodeView, an empty string ("") will be displayed for the string. The PRINT
	statement above will correctly print the contents of temp to the screen. The
	PRINT statement causes a space to be printed for each null character.
	
	One workaround for this behavior is to assign an empty string ("") to the
	fixed-length string variable. The assignment should be made after the DIM
	statement and before the MID$ statement. When a fixed-length string is assigned
	to an empty string, all null characters are replaced by spaces (ASCII 32). If a
	Watchpoint is set on temp in the following code example, the full contents of
	the string will be displayed in the Watch window.
	
	  DIM temp AS STRING * 20
	  temp = ""
	  MID$(temp,5,3) = "abc"   ' The whole string is watchable.
	  PRINT temp
	
	Additional query words: QuickBas BasicCom 2.20 3.10 3.14 4.00 4.00b 4.50 7.00 7.10
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbBASICSearch kbCodeView kbQBASICSearch kbZNotKeyword3
	Version           : :2.2,3.11,4.0,4.0b,4.5,7.0,7.1
	
	=============================================================================
	

{% endraw %}
