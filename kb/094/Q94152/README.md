---
layout: page
title: "Q94152: HPPCL5E: Adobe Type Manager Fonts Print at Wrong Size"
permalink: /kb/094/Q94152/
---

## Q94152: HPPCL5E: Adobe Type Manager Fonts Print at Wrong Size

	Article: Q94152
	Product(s): Microsoft Windows Printing Issues
	Version(s): 3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 19-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	When you use the printer driver for the Hewlett-Packard (HP) LaserJet 4/4M
	(HPPCL5E.DRV) version 1.03 or 1.04 and Adobe Type Manager (ATM) version 2.5,
	text formatted for Adobe Type Manager fonts may not print at the correct size if
	the Adobe Type Manager check box option Resident Or Pre- Built Fonts is selected
	and several mixed sizes of the same font are formatted on the same page.
	
	This problem can be corrected by selecting the Print Fonts As Graphics check box
	in Adobe Type Manager.
	
	MORE INFORMATION
	================
	
	Adobe Type Manager does not assign new font ID values based on point size as
	well as font name. Thus, when the driver sends the characters needed to print
	the output, only new characters are sent if the font name has changed for those
	characters. Changing the point size does not trigger the driver to send Adobe
	Type Manager characters for this new point size. When the printer places the
	characters on the page, it chooses the characters based on the Font IDs. For
	example, if character "A" is sent in Times Roman at 10 point and there is
	another Times Roman character "A" at a different size, both will print at 10
	point.
	
	This information was provided by Hewlett-Packard (HP) and has not been confirmed
	for Microsoft by Adobe. For more information on Adobe Type Manager 2.5, contact
	Adobe Systems.
	
	To obtain the phone numbers for Adobe, query on the following words in the
	Microsoft Knowledge Base:
	
	  "Adobe" (without the quotation marks) and "phonebook" (without the quotation
	  marks) and "pss" (without the quotation marks)
	
	The ATM and HP products included here are manufactured by vendors independent of
	Microsoft; we make no warranty, implied or otherwise, regarding these products'
	performance or reliability.
	
	
	Additional query words: 3.10 3.11 win31 PostScript
	
	======================================================================
	Keywords          :  
	Technology        : kbWin3xSearch kbZNotKeyword3 kbWin310 kbWin311
	Version           : :3.1,3.11
	
	=============================================================================
	
