---
layout: page
title: "Q137968: Perfmon and Network Monitor Counters Show Incorrect Values"
permalink: kb/137/Q137968/
---

## Q137968: Perfmon and Network Monitor Counters Show Incorrect Values

	Article: Q137968
	Product(s): Microsoft Systems Management Server
	Version(s): winnt:1.0,1.1,3.5,3.51
	Operating System(s): 
	Keyword(s): kb3rdparty kbnetwork
	Last Modified: 18-JUL-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Systems Management Server versions 1.0, 1.1 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	Under heavy stress situations, Windows NT computers running Network Monitor or
	Performance Monitor on a Token Ring 16Mb network with a NetFlx Eth/TR II network
	interface card (NIC) return zero for the following performance counters:
	
	Perfmon Network Segment Object:
	
	  % Broadcast frames
	  % Multicast Frames
	  % Network utilization
	  Broadcast frames received/second
	  Multicast frames received/second
	  Total bytes received/second
	
	Network General
	
	  % Broadcast frames
	  % Multicast Frames
	  % Network utilization
	  Broadcast frames received/second
	  Multicast frames received/second
	  Total bytes received/second
	
	This typically occurs when network utilization is continuously greater than 70-80
	percent.
	
	NOTE: The Performance counters do appear after a short period of time to recover
	as the values start to again increment but they never fully recover in that the
	values appear extremely low.
	
	CAUSE
	=====
	
	The NetFlex II NIC stops responding (hangs) and the counters are reset to 0.
	
	
	RESOLUTION
	==========
	
	This problem has been corrected in the latest Service Pack for Windows NT
	version 3.51. Windows NT now polls the NIC every 2 seconds to check for a hung
	condition. If hung, it is reset, but not into promiscuous mode. This problem
	does not happen when the NIC is running in normal mode.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT version 3.51. This
	problem was corrected in the latest Windows NT 3.51 U.S. Service Pack. For
	information on obtaining the Service Pack, query on the following word in the
	Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	Additional query words: netmon prodnt prodsms NetFlex II Perfmon
	
	======================================================================
	Keywords          : kb3rdparty kbnetwork 
	Technology        : kbSMSSearch kbSMS100 kbSMS110
	Version           : winnt:1.0,1.1,3.5,3.51
	
	=============================================================================
	
