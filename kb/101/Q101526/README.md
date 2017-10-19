---
layout: page
title: "Q101526: RAS 1.X with NETBIOSTIMEOUT and NETBIOSRETRIES"
permalink: /kb/101/Q101526/
---

## Q101526: RAS 1.X with NETBIOSTIMEOUT and NETBIOSRETRIES

	Article: Q101526
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SYMPTOMS
	========
	
	When you are loading RAS 1.X, the server responds with this error message:
	
	  The REMOTEACCESS service could not be started.
	  NET3055: A problem exists with the system configuration:
	  Security failure.
	
	  Error Log: NET3299: RAS0755: The Remote Access Service has not been granted
	  permission to start.
	
	CAUSE
	=====
	
	Using the default parameters in the AsyBEUI sections of Protocol.ini and
	adjusting the parameters in the NetBEUI section cause you to receive the above
	errors. Here are the appropriate sections:
	
	Protocol.ini:
	.
	[ASYBEUI_XIF]
	    DRIVERNAME = ASYBEUI$
	    BINDINGS = "ASY_NIF"
	
	[ASY_NIF]
	    DRIVERNAME=ASYMAC$
	
	[NETBEUI_XIF]
	    Drivername = netbeui$
	    BINDINGS = "ELNK3_NIF"
	    SESSIONS = 124
	    NCBS = 255
	    NAMES= 50
	    NETBIOSTIMEOUT = 2000<7F>
	    NETBIOSRETRIES = 8
	    T1 = 1500
	    T2 = 600
	    TI = 3000
	----------------------------------------------------------------------
	CONFIG.SYS:
	
	IFS=C:\LANMAN\NETPROG\HPFS386.IFS /I:C:\LANMAN /CACHE:4096
	/AUTOCHECK:C /MRAS:594
	
	Device drivers are normal ELNK3, ASYBEUI, NETBEUI and COMTOKR
	
	WORKAROUND
	==========
	
	To get RAS to load, use information in the table below to alter NETBIOSTIMEOUT
	and/or NETBIOSRETRIES, in the NetBEUI section of Protocol.ini.
	
	NetBiosRetries       NetBiosTimeOut    Successful TOTAL
	--------------       --------------    ---------- -----
	    5               2000                yes      10000
	    5               2100                yes      10500
	    5               2200                yes      11000
	    5               2300                yes      11500
	    5               2400                yes      12000
	    5               2500                 no      12500
	    5               4000                 no      20000
	    6               2000                yes      12000
	    7               1500                yes      10500
	    7               2000                 no      14000
	    8               1500                yes      12000
	    8               2000                 no      16000
	    9               1000                yes       9000
	    9               1500                 no      13500
	    10              1350                yes      13500
	    10              1400                 no      14000
	    12              1000                yes      12000
	    13              1000                yes      13000
	    13              1020                yes      13260
	    13              1025                yes      13325
	    15              1000                 no      15000
	
	RAS loads if the product of the two parameters is less than 13000 and
	NETBIOSTIMEOUT is less than 2400.
	
	Additional query words: RAS
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
