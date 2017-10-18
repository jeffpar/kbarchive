---
layout: page
title: "Q93079: How to Interpret Userlevel Output from READCFG.EXE"
permalink: kb/093/Q93079/
---

## Q93079: How to Interpret Userlevel Output from READCFG.EXE

	Article: Q93079
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	READCFG.EXE will display information about LAN Manager resources and
	configuration information. One entry is "userlevel" under the Auxilary data
	field. The number that follows userlevel can be interpreted as follows:
	
	  0 - Unlimited server
	  2 - 10-user server
	  4 - 20-user server
	  6 - 30-user server
	  8 - 40-user server
	  10 - 50-user server
	  12 - 60-user server
	
	Any server that has more than five Additional User Paks on it will automatically
	become an unlimited server, so userlevel will never be greater than 12.
	
	Additional query words: 2.10
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
