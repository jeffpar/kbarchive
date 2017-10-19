---
layout: page
title: "Q138864: SNA Server 2.11 Admin shows Inactive Status In Error"
permalink: /kb/138/Q138864/
---

## Q138864: SNA Server 2.11 Admin shows Inactive Status In Error

	Article: Q138864
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:2.0,2.1,2.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-JUN-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 2.0, 2.1, 2.11, on platform(s):
	   - the operating system: Microsoft Windows NT 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When viewing the status of an SNA Server connection or LUs using the SNA Server
	2.11 Admin program, some connections or LUs may appear Inactive, even though
	they are actually Available, or in use. Also, the status of a connection or LUs
	may take several minutes before the correct status appears in Admin.
	
	These problems tends to occur when you view an SNA Server that is configured with
	a large number of connections or 3270 LUs.
	
	CAUSE
	=====
	
	The Admin program internal buffer used to receives SNA Server status updates is
	being overrun. If an SNA Server is configured with a large number of connections
	and LUs off these connections, any status change causing a large number of
	update messages to flow to the Admin program can lead to this problem.
	
	RESOLUTION
	==========
	
	An update to the SNA Server Admin program increases an internal receive buffer
	queue from 4K to 8K. If an incorrect Inactive status still occurs, this internal
	buffer queue can be increased by creating and setting the ManageQueueSize
	registry value under the HKEY_CURRENT_USER subtree under the following subkey:
	
	  \Software\Microsoft\SNAServer\CurrentVersion \SnaAdmin
	
	Value Name: ManageQueueSize
	Data Type:  REG_DWORD
	Data:       <number>
	
	If this entry is not specified then it defaults to 8. Setting this value to 16
	(decimal) will result in 16 * 1024 * 16 bytes ( 256KB ) being allocated.
	
	Microsoft has updated the file <snaroot>\SYSTEM\SNAADMIN.EXE to correct
	this problem.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in SNA Server for Windows NT. This
	problem was corrected in the latest SNA Server for Windows NT, 2.11 U.S. Service
	Pack. For information on obtaining the Service Pack, query on the following word
	in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: 2.11 prodsna
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbSNAServSearch
	Version           : WINDOWS:2.0,2.1,2.11
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	
