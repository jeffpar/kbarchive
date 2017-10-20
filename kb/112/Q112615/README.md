---
layout: page
title: "Q112615: AWFAX: Minimum Number of Rings for Auto Answer"
permalink: /kb/112/Q112615/
---

## Q112615: AWFAX: Minimum Number of Rings for Auto Answer

{% raw %}

	Article: Q112615
	Product(s): Microsoft Windows 3.x Retail Product
	Version(s): WINDOWS:3.11
	Operating System(s): 
	Keyword(s): 
	Last Modified: 13-OCT-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows for Workgroups version 3.11 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When you choose the Fax icon in Control Panel and then choose the Setup button,
	the Number Of Rings setting under Auto Answer accepts values between 3 and 15
	only.
	
	If you enter a number fewer than 3 or greater than 15, the system beeps and
	changes the entry back to 3 or 15, respectively.
	
	MORE INFORMATION
	================
	
	You can edit the NumRings setting in the [COMx] or [CAS] section of the
	EFAXPUMP.INI file and manually change this value.
	
	If you change the NumRings setting in the EFAXPUMP.INI file to a value not
	supported by the user interface, this value changes to 3 or 15 (3 if the value
	you entered is less than 3 and 15 if the value you entered is greater than 15)
	when you open the Fax section of Control Panel.
	
	Also, the Fax menu option in Microsoft Mail displays the number of rings as 3 if
	the NumRings value is set to 3 or fewer and 15 if the NumRings setting is 15 or
	greater. However, the NumRings setting remains valid.
	
	This setting does not necessarily set the number of rings before the modem
	answers. It sets the number of rings before the initialization of the modem
	begins. The number of rings before the modem answers can be one or more
	additional rings, depending on the modem.
	
	Additional query words: 3.11 answer rings control panel efax
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWFWSearch kbWFW311
	Version           : WINDOWS:3.11
	
	=============================================================================
	

{% endraw %}
