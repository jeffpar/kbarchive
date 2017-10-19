---
layout: page
title: "Q194872: XGEN: How EBCDIC to ASCII Translation Takes Place"
permalink: /kb/194/Q194872/
---

## Q194872: XGEN: How EBCDIC to ASCII Translation Takes Place

	Article: Q194872
	Product(s): Microsoft Exchange
	Version(s): WinNT:5.0,5.5
	Operating System(s): 
	Keyword(s): 
	Last Modified: 16-MAY-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Server, versions 5.0, 5.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The connector gateways that communicate with mainframe systems (such as PROFS)
	must be able to translate ASCII characters to EBCDIC and back to ASCII. This
	article documents how this process occurs.
	
	MORE INFORMATION
	================
	
	If the host attempts to send the letter D (which is C4 in EBCDIC), it has to
	find the ASCII equivalent of the letter D in special files representing the
	codepages in use on either system. The connector opens the proper host to
	Exchange Server file, accesses the offset of 000000C4, looks up the value in the
	column (the value is 44), and translates the character to 44, which is the ASCII
	representation of the letter D.
	
	There are eight such files located in the Exchsrvr\Connect\Exchconn directory
	that contain the character mappings. These files are:
	
	  1252_256.csm Exchange -> host
	  1252_500.csm Exchange -> host
	  850_256.csm Exchange -> host
	  850_500.csm Exchange -> host
	  256_1252.csm host -> Exchange
	  500_1252.csm host -> Exchange
	  256_850.csm host -> Exchange
	  500_850.csm host -> Exchange
	
	Note that the files are in pairs for each direction. The file names represent the
	codepages in use on either system. If a file that is for Exchange --> host is
	opened in a regular hex editor (that only knows ASCII) the values in the right
	column will be incorrect. This is because the editor is attempting to read them
	as ASCII while they are the EBCDIC representations).
	
	If a file is opened in a hex editor (a snippet from 256_1252.csm is given below)
	the right column shows the character to be translated and the byte columns in
	the middle show the resulting character with the plain-text representation on
	the far right.
	
	NOTE: The following example should be one line:
	
	000000C0  7B 41 42 43 44 45 46 47  48 49 AD F4 F6 F2 F3 F5
	{ABCDEFGHI......
	
	======================================================================
	Keywords          :  
	Technology        : kbExchangeSearch kbExchange500 kbExchange550 kbZNotKeyword2
	Version           : WinNT:5.0,5.5
	Issue type        : kbhowto
	
	=============================================================================
	
