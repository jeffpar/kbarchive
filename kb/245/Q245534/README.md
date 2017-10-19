---
layout: page
title: "Q245534: How To Locate a COMTI TypeLib After It's Been Registered In MTS"
permalink: /kb/245/Q245534/
---

## Q245534: How To Locate a COMTI TypeLib After It's Been Registered In MTS

	Article: Q245534
	Product(s): Microsoft SNA Server
	Version(s): WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Operating System(s): 
	Keyword(s): kbDSupport kbsna
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft SNA Server, versions 4.0, 4.0 SP1, 4.0 SP2, 4.0 SP3 
	- Microsoft COM Transaction Integrator for CICS and IMS, versions 1.0, 1.0 SP1, 4.0 SP2, 4.0 SP3 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	When a systems administrator or developer deploys a COM Transaction Integrator
	for CICS and IMS (COMTI) component Type Library by installing it in a Microsoft
	Transaction Server (MTS) package , the component's Class Identifier (CLSID) is
	automatically entered in the MTS registry during the registration process making
	it accessible to COM-compliant applications. Additionally, the location of the
	Type Library is also saved in the registry so that MTS will know where to
	retrieve the file when it needs it. If an administrator has forgotten the name
	or location of the COMTI Type Library that is associated with a given MTS
	component, it is not intuitive to determine the location considering that the
	MTS Explorer does not publish this information.
	
	This article will show how to navigate various Registry keys in order to
	determine the location of a COMTI Type Library associated with a given MTS
	component.
	
	MORE INFORMATION
	================
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	The following steps can be used to find the COMTI Type Library associated with a
	given MTS component:
	
	1. Right-click the COMTI component within the MTS Explorer and select
	  Properties.
	
	2. Select the CLSID field. Right-click the selected field and select COPY to
	  copy the CLSID value to the Windows NT clipboard.
	
	3. Start REGEDIT and navigate to the following registry key:
	
	  HKEY_CLASSES_ROOT\CLSID\ 
	
	4. Right-click the CLSID registry key and select FIND. Paste the CLSID value
	  into the Find What text box. Click Find Next button to start the search.
	
	5. Once the search has completed, you will be positioned on the CLSID key
	  previously specified. For example, if the CLSID value obtained in step two is
	  {C69A96B2-93A6-11D3-96A8-00C04F91A7C3}, then REGEDIT will have you positioned
	  on the following key after the search has completed:
	
	  HKEY_CLASSES_ROOT\CLSID\{C69A96B2-93A6-11D3-96A8-00C04F91A7C3}
	
	6. Next, expand the key. There will be a number of subkeys subordinate to this.
	  Select a registry key called TypeLib.
	
	7. The TypeLib registry key will contain a value (in the right-hand portion of
	  the screen)called Default. Double-click Default to bring up the associated
	  GUID value. Select the data value and right-click to COPY it to the Windows
	  NT clipboard.
	
	8. Next, navigate to the following Registry key using REGEDIT:
	
	  HKEY_CLASSES_ROOT\TypeLib\ 
	
	9. Right-click the TypeLib registry key and select FIND. Paste the GUID value
	  obtained from step seven into the Find What edit box. Click Find Next to
	  continue the search.
	
	10. Once the search has completed, the REGEDIT tool will have you positioned on
	  the TypeLib key previously specified. See the following for an example:
	
	  HKEY_CLASSES_ROOT\TypeLib\{C69A96B0-93A6-11D3-96A8-00C04F91A7C3}
	
	11. Next, expand the entire key structure and locate the win32 subkey. The value
	  associated with the win32 subkey contains the location of the COMTI Type
	  Library. For example, the value might indicate C:\TEST\CEDARBANK.TLB
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDSupport kbsna 
	Technology        : kbAudDeveloper kbSNAServSearch kbCOMTISearch kbCOMTI100 kbCOMTI100SP1 kbCOMTI400SP2 kbCOMTI400SP3 kbSNAServ400 kbSNAServ400SP1 kbSNAServ400SP2 kbSNAServ400SP3 kbComSearch
	Version           : WINDOWS:1.0,1.0 SP1,4.0,4.0 SP1,4.0 SP2,4.0 SP3
	Issue type        : kbinfo
	
	=============================================================================
	
