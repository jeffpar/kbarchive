---
layout: page
title: "Q240029: Encarta 98: Computer Hangs During Playback of Video Clips"
permalink: /kb/240/Q240029/
---

## Q240029: Encarta 98: Computer Hangs During Playback of Video Clips

{% raw %}

	Article: Q240029
	Product(s): Microsoft Home Multimedia Titles
	Version(s): WINDOWS:
	Operating System(s): 
	Keyword(s): kb3rdparty kbdisplay kbenv kbimu
	Last Modified: 23-SEP-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Encarta 98 Encyclopedia for Windows 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you attempt to play a video clip in Microsoft Encarta 98, you may
	experience one of the following symptoms:
	
	- The computer may stop responding (hang).
	
	- The video clip may be distorted or contain colored lines.
	
	CAUSE
	=====
	
	This behavior can occur if the following conditions are true:
	
	- An ATI All-In-Wonder Pro video adapter is installed in the computer.
	
	- The video driver for your video adapter or the ATI Video Player software is
	  outdated.
	
	RESOLUTION
	==========
	
	To resolve this issue, use the following methods in the order in which they are
	presented.
	
	Obtain an Updated Video Driver or Video Player Software
	-------------------------------------------------------
	
	Download and install the most recent video driver available for your video
	adapter and the most recent ATI Video Player software from the following ATI Web
	site:
	
	  http://www.ati.com
	
	If the issue continues to occur, proceed to the next method.
	
	Remove the Direct Video Driver (Draw) Codec
	-------------------------------------------
	
	To remove the Direct Video Driver (Draw) codec:
	
	1. Restart Microsoft Windows in Safe mode. To do this, follow the appropriate
	  steps for your version of Windows.
	
	  Microsoft Windows 95:
	
	  Restart the computer. When you see the "Starting Windows 95" message, press
	  the F8 key, and then select Safe Mode from the Startup menu.
	
	  Microsoft Windows 98:
	
	  Restart your computer, press and hold down the CTRL key when the computer
	  completes the Power On Self Test (POST), and then select Safe Mode from the
	  Startup menu.
	
	2. Click Start, point to Settings, and then click Control Panel.
	
	3. Double-click Multimedia.
	
	4. On the Advanced or Devices tab, click the PLUS SIGN (+) next to Video
	  Compression Codecs to expand the branch.
	
	5. Click Direct Video Driver (Draw), click Remove, and then click Yes.
	
	6. Click OK, and then click OK again.
	
	7. Close Control Panel, and then restart the computer.
	
	NOTE: If you experience problems configuring display settings on the computer,
	download and install the latest version of the Intel Indeo video software from
	the following Intel Web site:
	
	  http://www.intel.com/ial/indeo/
	
	MORE INFORMATION
	================
	
	The third-party contact information included in this article is provided to help
	you find the technical support you need. This contact information is subject to
	change without notice. Microsoft in no way guarantees the accuracy of this
	third-party contact information.
	
	The third-party products discussed in this article are manufactured by vendors
	independent of Microsoft; we make no warranty, implied or otherwise, regarding
	these products' performance or reliability.
	
	Additional query words: multi multi-media media mm movie avi scrambled garbled
	
	======================================================================
	Keywords          : kb3rdparty kbdisplay kbenv kbimu 
	Technology        : kbHomeProdSearch kbHomeMMsearch kbEncartaSearch kbEncartaEncycSearch kbEncartaEnCyc1998
	Version           : WINDOWS:
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
