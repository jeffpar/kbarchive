---
layout: page
title: "Q154444: EPS Files Larger Than Page Fail to Print"
permalink: /kb/154/Q154444/
---

## Q154444: EPS Files Larger Than Page Fail to Print

	Article: Q154444
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.5,3.51
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	You are using an application that allows you to embed Encapsulated Postscript
	(EPS) graphics in a document, and the graphic is larger than the page in either
	width or length. When you go to print the document it will fail at the printer
	and create the following postscript error:
	
	  offending command SetPageDevice
	
	
	WORKAROUND
	==========
	
	You can work around the problem by clipping the EPS graphics before importing
	them into an application.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt framemaker
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : winnt:3.5,3.51
	
	=============================================================================
	
