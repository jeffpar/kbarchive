---
layout: page
title: "Q96176: ADDNAME2.EXE: A More Flexible ADDNAME Utility"
permalink: kb/096/Q96176/
---

## Q96176: ADDNAME2.EXE: A More Flexible ADDNAME Utility

	Article: Q96176
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	The ADDNAME utility that ships with LAN Manager allows you to enter LAN Manager
	NetBIOS names into the name cache, along with an IP address. This utility allows
	TCP/IP machines to connect to other TCP/IP machines over routers that don't
	forward broadcasts.
	
	MORE INFORMATION
	================
	
	The shipping ADDNAME utility was written specifically for LAN Manager, so it
	enforces rules onto the NetBIOS names it will enter into cache. It upshifts all
	characters, and pads the name out to 16 bytes with spaces. There are NetBIOS
	applications being shipped by other vendors that require the ability to use
	lower case names, or to pad the name with a character other than spaces.
	
	To assist in getting these applications to work, Microsoft has developed the
	utility ADDNAME2.EXE (which is unsupported). This utility allows:
	
	- Mixed case names
	
	- User-selected pad characters
	
	The syntax for ADDNAME2 is:
	
	  addname
	  addname computername ipaddress [/case] [/P0xn]
	  addname computername /delete [/case] [/P0xn]
	  addname /load [filename] [/case]
	  addname /save [filename]
	
	Thus, to add the name "MyremotePC386" padded by <NUL>s, you would type:
	
	  addname2 MyremotePC386 <ipaddr> /case /P0x00
	
	Note that if a cache containing mixed case characters is saved to a file with the
	/save option, then you must use the /case option to re-load the file into
	cache.
	
	The ADDNAME2 utility was developed by Microsoft to help our customers; it is not
	an official part of the LAN Manager product. We will support it on a
	commercially reasonable basis.
	
	Additional query words: 2.10 2.10a 2.20 padding
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
