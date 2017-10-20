---
layout: page
title: "Q137536: PRB: SQL PacketSize Property May Not Work w/Individual Handles"
permalink: /kb/137/Q137536/
---

## Q137536: PRB: SQL PacketSize Property May Not Work w/Individual Handles

{% raw %}

	Article: Q137536
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:2.5,3.0
	Operating System(s): 
	Keyword(s): kbvfp300 kbMDAC250
	Last Modified: 23-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 3.0 
	- Microsoft Data Access Components version 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you use the SQLSETPROP command to change the packet size of an ODBC
	connection, the SQLGETPROP command for the packet size returns the original
	value of the packet size. The expected behavior is that SQLGETPROP would return
	the new packet size as set in the SQLSETPROP command.
	
	CAUSE
	=====
	
	This behavior occurs because some drivers and servers do not support changing
	the packet size on an active connection. In these situations, it is necessary to
	change the default packet size prior to making each connection. This is
	discussed in detail in the "Workaround" section of this article.
	
	RESOLUTION
	==========
	
	The following workaround precludes setting up ODBC data sources connect1 and
	connect2. These can be SQL, Oracle, or other ODBC connections.
	
	Use the following commands to set individual packet sizes:
	
	     =SQLSETPROP(0,'packetsize',8192) && 0 means default handle
	     handle1=SQLCONNECT('connect1','username','password')
	     paksize1=SQLGETPROP(handle1,'packetsize')
	
	NOTE: packsize1 will return 8192
	
	     =SQLSETPROP(0,'packetsize',4096) && 0
	     handle2=SQLCONNECT('connect2','username','password')
	     paksize2=SQLGETPROP(handle2,'packetsize')
	
	NOTE: packsize2 will return 4096
	
	STATUS
	======
	
	This behavior is by design.
	
	MORE INFORMATION
	================
	
	The following steps illustrate the behavior of ineffective, individual packet
	size settings:
	
	Steps to Reproduce Behavior
	---------------------------
	
	     handle1=SQLCONNECT('connect1','username','password')
	     =SQLSETPROP(handle1,'packetsize',8192 &&
	     paksize1=SQLGETPROP(handle1,'packetsize')
	
	NOTE: packsize1 will return 4096
	
	     handle2=SQLCONNECT('connect2','username','password')
	     =SQLSETPROP(handle2,'packetsize',8192 &&
	     paksize2=SQLGETPROP(handle2,'packetsize')
	
	NOTE: packsize2 will return 4096
	
	Additional query words: different each separate single VFoxWin
	
	======================================================================
	Keywords          : kbvfp300 kbMDAC250 
	Technology        : kbVFPsearch kbAudDeveloper kbMDACSearch kbMDAC250 kbVFP300
	Version           : WINDOWS:2.5,3.0
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
