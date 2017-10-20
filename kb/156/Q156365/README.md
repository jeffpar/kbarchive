---
layout: page
title: "Q156365: Hidden Shares Are Not Available After Using System Policy Editor"
permalink: /kb/156/Q156365/
---

## Q156365: Hidden Shares Are Not Available After Using System Policy Editor

{% raw %}

	Article: Q156365
	Product(s): Microsoft Windows NT
	Version(s): 3.5,3.51,4.0
	Operating System(s): 
	Keyword(s): kbusage
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Hidden shares are no longer available after you save changes with System Policy
	Editor in registry mode.
	
	CAUSE
	=====
	
	The value for the AutoShareServer parameter was replaced with the setting in
	System Policy Editor\Windows NT Network\Sharing\Create Hidden Drive Shares
	(server).
	
	
	RESOLUTION
	==========
	
	To resolve this problem you can edit the WINNT.ADM file or obtain Service Pack
	3.
	
	POLICY !!WorkstationShareAutoCreate
	VALUENAME "AutoShareWks"
	VALUEOFF NUMERIC 0
	---->VALUEON  NUMERIC 1   <----
	PART !!ShareWks_Tip1            TEXT    END PART
	PART !!ShareWks_Tip2            TEXT    END PART
	END POLICY
	
	POLICY !!ServerShareAutoCreate
	VALUENAME "AutoShareServer"
	VALUEOFF NUMERIC 0
	---->VALUEON  NUMERIC 1  <----
	PART !!ShareServer_Tip1         TEXT    END PART
	PART !!ShareServer_Tip2         TEXT    END PART
	END POLICY
	
	and for BeepEnabled, add the indicated line:
	
	POLICY !!Beep_Enabled
	VALUENAME BeepEnabled
	VALUEOFF NUMERIC 0
	---->VALUEON  NUMERIC 1   <----
	PART !!Beep_Tip1TEXTEND PART
	PART !!Beep_Tip2TEXTEND PART
	END POLICY
	
	Add the lines surrounded by, ----> <----, but leave those characters out.
	
	-OR-
	
	To correct this problem, manually set the following Local Computer Properties in
	System Policy Editor before saving changes to the registry:
	
	Windows NT Network
	
	  Sharing
	     Create hidden drive shares (workstation)
	     Create hidden drive shares (server)
	
	Windows NT Printers
	
	  Beep for error enabled
	
	NOTE: You must manually set the Local Computer Properties mentioned above each
	time you save changes to the registry. Their check boxes will be blank (clear)
	each time you start System Policy Editor, unless you edit the WINNT.ADM file or
	obtain SP3.
	
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT Server version 4.0.
	This problem was corrected in the latest U.S. Service Pack for Windows NT
	version 4.0. For information on obtaining the Service Pack, query on the
	following word in the Microsoft Knowledge Base (without the spaces):
	
	  S E R V P A C K
	
	
	Additional query words: administrator administrative share admin disappear
	
	======================================================================
	Keywords          : kbusage 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : :3.5,3.51,4.0
	Issue type        : kbbug
	
	=============================================================================
	

{% endraw %}
