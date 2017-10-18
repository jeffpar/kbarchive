---
layout: page
title: "Q178183: XCLN: Creating New Profile Does Not Prompt for Profile Name"
permalink: kb/178/Q178183/
---

## Q178183: XCLN: Creating New Profile Does Not Prompt for Profile Name

	Article: Q178183
	Product(s): Microsoft Exchange
	Version(s): MACINTOSH:8.0; WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Exchange Windows 95/98 client, versions 4.0, 5.0 
	- Microsoft Exchange Windows NT client, versions 4.0, 5.0 
	- Microsoft Exchange Macintosh client, versions 4.0, 5.0 
	- Microsoft Outlook 97, versions 8.0, 8.01, 8.02, 8.03 
	- Microsoft Outlook, Exchange Server Edition, version 8.0, used with:
	   - the operating system: Microsoft Windows versions 3.1, 3.11 
	- Microsoft Outlook for Macintosh, Exchange Server Edition, version 8.0 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	When you create a new profile for Microsoft Outlook or Microsoft Exchange, you
	may not be prompted for a profile name.
	
	CAUSE
	=====
	
	This behavior may occur if no MAPI profile exists on the computer.
	
	WORKAROUND
	==========
	
	To create the first profile with a specific name, follow these steps:
	
	1. Start either the Microsoft Exchange Setup Wizard or the Microsoft Outlook
	  Setup Wizard.
	
	2. Select the "Manually configure information services" option, or if you are
	  using the Macintosh client, select "Manually configure profile."
	
	3. Click the Next button.
	
	4. You will be prompted for a profile name. Once you have entered a name,
	  continue through the Wizard to completely configure the profile.
	
	As an alternative to the above method, you can also do the following:
	
	1. Create a new profile with the desired characteristics.
	
	2. Copy the profile, and enter a name for the new profile.
	
	3. You can then delete the original profile.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in the Microsoft products listed at
	the beginning of this article. We are researching this problem and will post new
	information here in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	When you create the first MAPI profile for a Windows client, the profile name
	will be determined by the following Registry key:
	
	  HKEY_CURRENT_USER
	     \Software
	        \Microsoft
	           \MS Setup (ACME)
	              \User Info
	                 \DefName
	
	If this key does not exist or you are using a Macintosh client, the profile name
	will default to "MS Exchange Settings."
	
	Additional query words: outlook settings control panel mail fax inbox properties
	
	======================================================================
	Keywords          :  
	Technology        : kbHWMAC kbOSMAC kbOutlookSearch kbExchangeSearch kbExchangeClientSearch kbZNotKeyword kbZNotKeyword2 kbOutlook97Search kbZNotKeyword3
	Version           : MACINTOSH:8.0; WINDOWS:4.0,5.0,8.0; :8.0,8.01,8.02,8.03
	Issue type        : kbbug
	
	=============================================================================
	
