---
layout: page
title: "Q149386: Cannot Connect to MSN After Installing Unimodem V"
permalink: /kb/149/Q149386/
---

## Q149386: Cannot Connect to MSN After Installing Unimodem V

{% raw %}

	Article: Q149386
	Product(s): The Microsoft Network
	Version(s): WINDOWS:1.3,2.0,2.5
	Operating System(s): 
	Keyword(s): kbmsn
	Last Modified: 09-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Network versions 1.3, 2.0, 2.5 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	After you download and install Unimodem V, you may receive the following error
	message when you try to connect to MSN, The Microsoft Network:
	
	  Cannot locate the Microsoft Network Data Center. Please try again later.
	
	CAUSE
	=====
	
	If you click Open (rather than Save As) when you download the Unimodv.exe file,
	the installation program places a copy of the Wsock32.dll and Wsock.vxd files in
	the Windows folder. The Wsock32.dll and Wsock.vxd files required by MSN are
	already located in the Windows\System folder.
	
	RESOLUTION
	==========
	
	To resolve this issue, remove or rename the Wsock32.dll and Wsock.vxd files in
	the Windows folder.
	
	MORE INFORMATION
	================
	
	For additional information about Unimodem V, please see the following article in
	the Microsoft Knowledge Base:
	
	  Q139383 Unimodem V Adds Additional Support for Data/Fax/Voice Modems
	
	Additional query words: msn
	
	======================================================================
	Keywords          : kbmsn 
	Technology        : kbMSNSearch kbMSN200 kbMSN130 kbMSN250
	Version           : WINDOWS:1.3,2.0,2.5
	Issue type        : kbprb
	
	=============================================================================
	

{% endraw %}
