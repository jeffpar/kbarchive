---
layout: page
title: "Q256978: Bandwidth Leak with IEEE 1394 Video Capture"
permalink: /kb/256/Q256978/
---

## Q256978: Bandwidth Leak with IEEE 1394 Video Capture

{% raw %}

	Article: Q256978
	Product(s): Microsoft Windows NT
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kbDDK kbOSWin2000fix kbVideo kbDSupport kbGrpDSNTDDK kbWin2000PreSP1Fix kbWinNT400PreSP
	Last Modified: 31-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 2000 Advanced Server 
	- Microsoft Windows 2000 Server 
	- Microsoft Windows 2000 Professional 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	While you are capturing video data by using an Institute of Electrical and
	Electronics Engineers (IEEE) 1394 device, you may receive the following error
	message:
	
	  Insufficient system resources exist to complete the API
	
	CAUSE
	=====
	
	While you are capturing or previewing video data, if you stop and restart the
	video stream more than 20 times, you may receive the error message that is shown
	in the "Symptoms" section. This problem is caused by a bandwidth leak in the
	IEEE 1394 bus and video drivers.
	
	RESOLUTION
	==========
	
	To resolve this problem, obtain the latest service pack for Windows 2000. For
	additional information, click the following article number to view the article
	in the Microsoft Knowledge Base:
	
	  Q260910 How to Obtain the Latest Windows 2000 Service Pack
	
	
	
	STATUS
	======
	
	Microsoft has confirmed that this is a problem in the Microsoft products that
	are listed at the beginning of this article.
	
	Microsoft has confirmed that this is a problem in Windows NT 4.0.
	
	This problem was first corrected in Windows 2000 Service Pack 1.
	
	MORE INFORMATION
	================
	
	This problem may not appear if you disconnect and then reconnect the IEEE 1394
	device in between attempts to capture or preview video data, effectively making
	a bus reset. Also, the problem may arise only if the video device is the
	Isochronous Resource Manager (IRM). Once you receive this error, you won't be
	able to restart the video capture.
	
	Additional query words: IEEE 1394 msdv
	
	======================================================================
	Keywords          : kbDDK kbOSWin2000fix kbVideo kbDSupport kbGrpDSNTDDK kbWin2000PreSP1Fix kbWinNT400PreSP7Fix kbWin2000sp1Fix kbVideoTech 
	Technology        : kbwin2000AdvServ kbwin2000AdvServSearch kbwin2000Serv kbwin2000ServSearch kbwin2000Search kbwin2000ProSearch kbwin2000Pro kbWinAdvServSearch
	Version           : WINDOWS:
	Hardware          : x86
	Issue type        : kbbug
	Solution Type     : kbfix
	
	=============================================================================
	

{% endraw %}
