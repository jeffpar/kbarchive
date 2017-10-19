---
layout: page
title: "Q145613: Access Violation Using MPR and Third-Party Network Provider"
permalink: /kb/145/Q145613/
---

## Q145613: Access Violation Using MPR and Third-Party Network Provider

	Article: Q145613
	Product(s): Microsoft Windows NT
	Version(s): 3.5 3.51
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Workstation versions 3.5, 3.51 
	- Microsoft Windows NT Server versions 3.5, 3.51 
	-------------------------------------------------------------------------------
	
	
	SYMPTOMS
	========
	
	An application that uses the Multi-Protocol Router (MPR) and a third-party
	network provider does not start and an Access Violation error message appears.
	
	
	CAUSE
	=====
	
	According to the Win32 documentation, a null character is required at the end of
	the network provider path in the registry. When MPR.DLL reads the path of the
	third-party network provider, a null character is not found.
	
	
	WORKAROUND
	==========
	
	To resolve this problem, upgrade to Windows NT Workstation and Server version
	4.0.
	
	To work around this problem, do the following:
	
	WARNING: Using the Registry Editor incorrectly can cause serious, system- wide
	problems that may require you to reinstall Windows NT to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of the Registry Editor
	can be solved. Use this tool at your own risk.
	
	1. Start Registry Editor (REGEDT32.EXE) and locate the following Registry subkey
	  in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Control\NetworkProvider\Order
	
	2. Select the ProviderOrder value name and note the name of the third-party
	  provider.
	
	3. Locate the following Registry subkey in the HKEY_LOCAL_MACHINE subtree:
	
	  \SYSTEM\CurrentControlSet\Services\<third-party provider>
	  \networkprovider
	
	4. Select the ProviderPath value name. From the Edit menu, select String.
	
	5. Press CTRL+C to copy the string to the clipboard.
	
	6. Remove the string and click OK.
	
	7. Select the ProviderPath value name. From the Edit menu, select String.
	
	8. Press CTRL+V to copy the contents of the clipboard to the string.
	
	9. Click OK and quit Registry Editor.
	
	10. Shut down and restart Windows NT.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a problem in Windows NT versions 3.5 and
	3.51. This problem was corrected in Windows NT Workstation and Server version
	4.0.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNT351search kbWinNT350search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTSsearch kbWinNTS351 kbWinNTS350 kbWinNTS351search kbWinNTS350search
	Version           : 3.5 3.51
	
	=============================================================================
	
