---
layout: page
title: "Q117580: CONN: MMFF#.MSG Filename Range"
permalink: /kb/117/Q117580/
---

## Q117580: CONN: MMFF#.MSG Filename Range

	Article: Q117580
	Product(s): Microsoft Mail For PC Networks
	Version(s): 3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Connection for PC and AppleTalk Networks, version 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Version 3.2 of the Microsoft Mail Connection for PC and AppleTalk Networks
	transfers mail between the AppleTalk and PC Mail systems in the form of an
	MMFF#.MSG message file. The filename range is dependent on the blocking factor,
	which is can be configured under the Gateway Configuration menu when you are
	logged in as Network Manager on the Mail server where the Mail Connection
	gateway is installed. The default blocking factor is 10, which implies that the
	default file name range is:
	
	  (MMFF1.MSG, MMFF2.MSG, MMFF3.MSG,...,MMFF10.MSG)
	
	The maximum acceptable blocking factor value is 99.
	
	To change the gateway configuration options, log in as the Network Manager on the
	Mail server where the Mail Connection gateway is installed and select
	Mail:Gateway:Configuration from the top menu bar. Edit the gateway configuration
	option and click the Update button to save the changes to the MACGATE.INI file.
	
	MORE INFORMATION
	================
	
	The MACGATE.INI file contains configuration information that is used by both the
	Macintosh and PC gateway components. Some of this information is read from the
	MACGATE.INI file and stored by the AppleTalk Mail server in the Microsoft Mail
	Data File when you click the Update button, but if you manually edit the
	MACGATE.INI file, changes are not reflected in the Mail Data file.
	
	
	Additional query words: 3.20
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailConn320
	Version           : :3.2
	
	=============================================================================
	
