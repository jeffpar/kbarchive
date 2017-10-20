---
layout: page
title: "Q118859: MHS: Correct Addressing format to DaVinci Email via MHS"
permalink: /kb/118/Q118859/
---

## Q118859: MHS: Correct Addressing format to DaVinci Email via MHS

{% raw %}

	Article: Q118859
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Once you have installed the Microsoft Mail Gateway to Novell's MHS, MHS and
	DaVinci Email, you may want to insert all the DaVinci Email user addresses in
	the Gateway address list. Mail composed on an MS Mail user's desktop for a
	DaVinci user is addressed in this format:
	
	  USER@MHSHOSTNAME (USER)
	
	For example: Suppose you have DaVinci users Barry and David, and the MHS has a
	host definition of MICROSOFT and a gateway definition for WGA. To include
	Barry's address in your Gateway Address list, use this format in Admin:
	
	  Barry@MICROSOFT (Barry)
	
	If for some reason you don't want David in your Gateway Address list, don't
	insert him; but if you still would like to be able to send him mail, go to the
	MS-DOS client, toggle over to MHS type users and press the INSERT key to add
	David's address--David@MICROSOFT (David). If you are using the Windows client,
	type [MHS:David@MICROSOFT (David)] on the To: line.
	
	REFERENCES
	==========
	
	"Microsoft Mail Gateway to MHS Administrator's Guide," p. 26 (addressing).
	"Microsoft Mail Administrator's Guide," version 3.2, p. 318 (IMPORT.EXE).
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	

{% endraw %}
