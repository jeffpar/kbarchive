---
layout: page
title: "Q152121: Windows NT Logon to NetWare Is Slow &amp; Causes Event 8007 Errors"
permalink: /kb/152/Q152121/
---

## Q152121: Windows NT Logon to NetWare Is Slow &amp; Causes Event 8007 Errors

	Article: Q152121
	Product(s): Microsoft Windows NT
	Version(s): winnt:3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 3.51 
	- Microsoft Windows NT Server version 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you log on to a NetWare Server across a Novell router(s) (file servers or
	multi-protocol routers), it may be unusually slow and sometimes may take as long
	as 8 to 12 seconds. Event ID 8007 may also appear in the System log.
	
	CAUSE
	=====
	
	This may be due to the router(s) limiting the size of the packet you can use,
	particularly if this is a Token Ring network.
	
	The response to a logon to a NetWare Server across a router may take several
	seconds (as long as 8 to 12), depending on how long it takes to negotiate the
	correct packet size to connect to the NetWare server.
	
	You may also see a number of Event ID 8007 error messages in the Event Viewer
	right after logging on. The response time is long because Windows NT is
	negotiating the largest packet it can use to access the NetWare Server. If the
	packet size used by the adapter installed in Windows NT uses a packet size much
	larger than the router allows, Windows NT has to negotiate to find out how large
	a packet it can use.
	
	RESOLUTION
	==========
	
	To shorten the logon time:
	
	1. Configure the router to use the largest packet size possible on your network.
	  Consider all circumstances that may require you to keep the packet size
	  shorter. If you do not know the packet size your router is using consult the
	  router manual or contact the router manufacturer, or continue with B below to
	  experiment with different packet sizes.
	
	2. To eliminate packet size negotiations, configure Windows NT to use the packet
	  size the router is set to.
	
	  WARNING: Using Registry Editor incorrectly can cause serious, system- wide
	  problems that may require you to reinstall Windows NT to correct them.
	  Microsoft cannot guarantee that any problems resulting from the use of
	  Registry Editor can be solved. Use this tool at your own risk.
	
	  a. Run the Registry Editor(REGEDT32.EXE).
	
	  b. Under the HKEY_LOCAL_MACHINE subtree go to the following subkey:
	
	     \System\CurrentControlSet\Services\NwlnkIpx\NetConfig\AdapterName#
	
	3. Check whether the entry MaxPktSize exists.
	
	  a. If the MaxPktSize entry exists, the value may be set to 0 (zero) which
	     means that the packet size determined by the driver is used for the
	     adapter and you need to change that value. Double-click the parameter
	     value in the right window pane and skip to step 3.c.
	
	  b. If the MaxPktSize entry does not exist:
	
	     1. From the Edit menu, choose Add Value and add the following information
	        when prompted:
	
	        Value Name: MaxPktSize
	        Data Type : REG_DWORD
	
	     2. Choose Ok.
	
	  c. In the DWORD Editor dialog box set the Data field to the packet size the
	     router is configured for. If you are not sure what that is, you can test
	     with various values to see what works best. It may be best to start with a
	     value of 1024 (decimal) and work up or down from there.
	
	This limits the negotiation process and should enable the logon to occur much
	faster. You should also see fewer 8007 errors.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS351search
	Version           : winnt:3.51
	
	=============================================================================
	
