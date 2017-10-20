---
layout: page
title: "Q175470: ActionListOn Items May Be Reset to off after Editing a Policy"
permalink: /kb/175/Q175470/
---

## Q175470: ActionListOn Items May Be Reset to off after Editing a Policy

{% raw %}

	Article: Q175470
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0;Win95
	Operating System(s): 
	Keyword(s): 
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation version 4.0 
	- Microsoft Windows NT Server version 4.0 
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	ActionListOn items in a policy file are reset to off when the policy file is
	opened for editing and then saved.
	
	CAUSE
	=====
	
	The policy template keywords ActionListOn and ActionListOff are used to specify
	an optional list of changes to the registry that are made in response to a
	control being in a certain state. For example, if a check box is the control,
	and it's selected, all entries specified in the ActionListOn section are set in
	the registry. If the check box is cleared, all entries in the ActionListOff are
	used.
	
	RESOLUTION
	==========
	
	A variable is required to store the state of the ActionList. One of the
	following keywords must be used in defining the registry key containing the
	actionlist: ValueName, or ListBox, or ComboBox. The following section of a
	Policy file contains just some of the ways to use each of the above keywords
	with the ActionList section.
	
	  CLASS USER
	
	  CATEGORY "Level 1"
	
	       POLICY "Policy One"
	       KEYNAME SOFTWARE\Policies\1
	       VALUENAME "TestValue"
	       ACTIONLISTON
	            VALUENAME "ParameterOne"    VALUE NUMERIC 1
	            VALUENAME "ParameterTwo"    VALUE NUMERIC 2
	       END ACTIONLISTON
	       ACTIONLISTOFF
	             VALUENAME "ParameterOne"    VALUE NUMERIC -1
	             VALUENAME "ParameterTwo"    VALUE NUMERIC -2
	       END ACTIONLISTOFF
	       END POLICY
	
	       POLICY "Policy Two"
	       KEYNAME SOFTWARE\Policies\2
	       PART Test LISTBOX EXPLICITVALUE
	       END PART
	       ACTIONLISTON
	               VALUENAME "ParameterThree"    VALUE NUMERIC 3
	               VALUENAME "ParameterFour"     VALUE NUMERIC 4
	       END ACTIONLISTON
	       ACTIONLISTOFF
	               VALUENAME "ParameterThree"    VALUE NUMERIC 30
	               VALUENAME "ParameterFour"     VALUE NUMERIC 40
	       END ACTIONLISTOFF
	       END POLICY
	
	       POLICY "Policy Three"
	       KEYNAME SOFTWARE\Policies\3
	       PART "ChBx" COMBOBOX
	       SUGGESTIONS
	         User PowerUser
	       END SUGGESTIONS
	        VALUENAME "Combo1"
	       END PART
	       ACTIONLISTON
	               VALUENAME "ParameterFive"    VALUE NUMERIC 5
	               VALUENAME "ParameterSix"     VALUE NUMERIC 6
	       END ACTIONLISTON
	       ACTIONLISTOFF
	               VALUENAME "ParameterFive"    VALUE NUMERIC 50
	               VALUENAME "ParameterSix"     VALUE NUMERIC 60
	       END ACTIONLISTOFF
	
	  END POLICY
	  END CATEGORY
	
	Additional query words: ntregistry spe poledit adm common winnt windows
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWin95search kbZNotKeyword3
	Version           : WinNT:4.0;Win95
	Hardware          : x86
	
	=============================================================================
	

{% endraw %}
