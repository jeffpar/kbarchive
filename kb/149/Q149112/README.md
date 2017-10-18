---
layout: page
title: "Q149112: Some Image Maps Do Not Work with IIS"
permalink: kb/149/Q149112/
---

## Q149112: Some Image Maps Do Not Work with IIS

	Article: Q149112
	Product(s): Internet Information Server
	Version(s): winnt:1.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 21-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Internet Information Server 1.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Some image map files may not work well with Microsoft Internet Information
	Server (IIS) version 1.0 because of the syntax used for creating the map files.
	
	CAUSE
	=====
	
	IIS uses the CERN specifications for image maps. Map files that use the
	following syntax may work on other World Wide Web (WWW) servers but may not
	function well on IIS:
	
	  default file.htm
	  file1.htm rect (0,1) (170,53)
	  file2.htm rect (264,26) (349,53)
	  file3.htm rect (187,23) (264,53)
	
	The correct syntax for the above map data is:
	
	  default file.htm
	  rect (0,1) (170,53) file1.htm
	  rect (264,26) (349,53) file2.htm
	  rect (187,23) (264,53) file3.htm
	
	NOTE: The rectangle range specifications occur prior to the destination HTML
	file. For more information on creating image maps for use with IIS, see
	Knowledge Base article number Q146573.
	
	RESOLUTION
	==========
	
	Obtain the fix mentioned below.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Internet Information Server
	version 1.0. This problem was corrected in the latest Windows NT 3.51 U.S.
	Service Pack. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words:
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbiisSearch kbiis100
	Version           : winnt:1.0
	
	=============================================================================
	
