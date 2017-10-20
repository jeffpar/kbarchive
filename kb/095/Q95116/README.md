---
layout: page
title: "Q95116: WFWG: System Hangs with Novell NetWare and Token Ring"
permalink: /kb/095/Q95116/
---

## Q95116: WFWG: System Hangs with Novell NetWare and Token Ring

{% raw %}

	Article: Q95116
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.1,3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 01-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups versions 3.1, 3.11 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you copy files to a Novell NetWare file server using Windows for Workgroups
	with NetWare Connectivity and the IBM Token Ring 4/16 network adapter, the
	system may stop responding (hang) and/or files may become corrupted.
	
	Symptoms may include system hangs when copying files to a NetWare server from the
	Windows for Workgroups File Manager or from an MS-DOS command prompt (either
	inside or outside Windows).
	
	WORKAROUND
	==========
	
	To work around these problems:
	
	Windows for Workgroups 3.1
	--------------------------
	
	Use the Advanced Card Settings option in Control Panel to increase the number of
	transmit buffers and the transmit and receive buffer sizes.
	
	Windows for Workgroups 3.11
	---------------------------
	
	Use the Network Setup icon in the Network group to increase the number of
	transmit buffers and the transmit and receive buffer sizes.
	
	MORE INFORMATION
	================
	
	The default values for the number of transmit buffers and the transmit and
	receive buffer sizes may not be large enough for some IBM Token Ring
	configurations, particularly those running at 16 Mbps.
	
	The Token Ring specifications define a maximum length of time any adapter can
	hold the token. This, along with the hardware capabilities of the Token Ring
	adapter, determine the buffer sizes you should use. The following are valid
	ranges for RECVBUFSIZE and XMITBUFSIZE:
	
	  Adapter                            Range
	  --------------------------------------------
	
	  4 Mbs Adapter                      256-2040
	  4/16 Adapter Running at 4Mb        256-4096
	  4/16 Adapter Running at 16Mb       256-17952
	
	Use the Advanced Card Settings option in Control Panel to change the settings as
	follows:
	
	  XMITBUFS=2         (default is 1, maximum is 2)
	  XMITBUFSIZE=1024   (default is 256, recommended is 2040)
	  RECVBUFSIZE=1024   (default is 256, recommended is 2040)
	
	For additional information about the meaning and use of these buffer sizes, query
	on the following words here in the Microsoft Knowledge Base:
	
	  tuning and lm and token-ring
	
	REFERENCES
	==========
	
	"LAN Manager Installation and Configuration Guide" for version 2.2, pages
	211-213
	
	Additional query words: 3.10 3.11 nic tokenring freeze lock up lockup 3rdparty
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW310 kbWFW311
	Version           : WINDOWS:3.1,3.11
	
	=============================================================================
	

{% endraw %}
