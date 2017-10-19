---
layout: page
title: "Q128717: MHS: Err Msg: Inpost: General File I/O Error"
permalink: /kb/128/Q128717/
---

## Q128717: MHS: Err Msg: Inpost: General File I/O Error

	Article: Q128717
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 11-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following error message may appear when Microsoft Mail Gateway to MHS is
	spawned by GWDEAMON.EXE (Netware Global Messaging's Deamon):
	
	  Inpost: General file I/O error
	
	CAUSE
	=====
	
	Two MS-DOS environment variables (USR and MV) need to be set on the computer
	running GWDEAMON. Page 17 of the Microsoft Mail Gateway to MHS "Administrator's
	Guide" details these variables as follows:
	
	  Set USR=ADMIN
	  Set MV=server/volume:
	  Set MV=F:\
	
	where F:\ is a drive letter that has been mapped to the root of the volume with
	the MHS gateway installed on it.
	
	MORE INFORMATION
	================
	
	GWDEAMON requires these variables similarly to MHS 1.5.
	
	
	Additional query words: 3.00
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
