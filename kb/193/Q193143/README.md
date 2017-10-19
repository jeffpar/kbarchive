---
layout: page
title: "Q193143: BUG: DCOM Client Hangs and Then Gives Error 429"
permalink: /kb/193/Q193143/
---

## Q193143: BUG: DCOM Client Hangs and Then Gives Error 429

	Article: Q193143
	Product(s): Microsoft Visual Basic for Windows
	Version(s): 6.0
	Operating System(s): 
	Keyword(s): kbDCOM kbRegistry kbVBp kbVBp600bug kbGrpDSVB kbDSupport
	Last Modified: 29-OCT-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual Basic Enterprise Edition for Windows, version 6.0, on platform(s):
	   - the operating system: Microsoft Windows NT 
	   - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When running an ActiveX EXE Server created through DCOM on a Windows NT or
	Windows 2000 machine, the client may hang for approximately 2 minutes and then
	generate a run-time error:
	
	  '429' - "ActiveX component can't create object".
	
	CAUSE
	=====
	
	This is caused by the ActiveX EXE Server trying to write to a registry key that
	the User Account the DCOM Server is running under does not have permissions for.
	
	RESOLUTION
	==========
	
	The workaround to this problem is to set the permissions to the given registry
	key so that the User Account running the DCOM server has full control or, at
	least, setting and querying rights.
	
	IMPORTANT: This article contains information about editing the registry. Before
	you edit the registry, make sure you understand how to restore it if a problem
	occurs. For information about how to do this, view the "Restoring the Registry"
	Help topic in Regedit.exe or the "Restoring a Registry Key" Help topic in
	Regedt32.exe.
	
	WARNING: Using Registry Editor incorrectly can cause serious, system-wide
	problems that may require you to reinstall Windows to correct them. Microsoft
	cannot guarantee that any problems resulting from the use of Registry Editor can
	be solved. Use this tool at your own risk.
	
	Allowing Full Control on the Given Registry Key
	-----------------------------------------------
	
	- Open the REGEDT32 tool and select the registry key below:
	
	     HKEY_CLASSES_ROOT
	        \CLSID
	           \{D5DE8D20-5BB8-11D1-A1E3-00A0C90F2731}
	
	- Select "Permissions" from the "Security" menu.
	
	- Click the "Add" button and give "Full Control" for each DCOM client user
	  account that will need to access the DCOM Server.
	
	Allowing Setting and Querying Rights on the Given Registry Key
	--------------------------------------------------------------
	
	- Open the REGEDT32 tool and select the registry key below:
	
	     HKEY_CLASSES_ROOT
	        \CLSID
	           \{D5DE8D20-5BB8-11D1-A1E3-00A0C90F2731}
	
	- Select "Permissions" from the "Security" menu.
	
	- Click the "Add" button and give "Special Access" for each DCOM client user
	  account that will need to access the DCOM Server. In the Special Access
	  window, select the Set Value and Query Value boxes.
	
	Who Needs to Have Access Rights to This Key?
	--------------------------------------------
	
	The users you need to give access rights on the key mentioned above depend on
	your Identity setting in DCOMCNFG, as explained below:
	
	- The Launching User:
	
	  If your server will run under the context of the Launching User, you will need
	  to grant rights to each user account that will need to access your DCOM
	  server.
	
	- This User:
	
	  If your server will run under a specific User Account, you need to grant
	  access only to this user.
	
	- The Interactive User:
	
	  If your server will run under the Interactive User account, you need to grant
	  access to the Interactive User.
	
	  NOTE: When the identity is set to This User, DCOMCNFG will add This User to
	  the list of accounts with rights to "Log on as a Batch Job." In a very
	  specific situation, this may not happen. This is a known bug in DCOMCNFG. If
	  you are under this situation, you should add this account manually using the
	  "User Manager" Administrative Tool for NT. From the Policies Menu, select
	  User Rights, check the "Show Advanced User Rights," select the "Log on as a
	  Batch Job" option, and add the required user to the list.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	You may also note that the ActiveX EXE server process is launched and running on
	the Windows NT or Windows 2000 system during this 2-minute timeout period. The
	CPU utilization for this process will most likely be close to 100 percent. At
	the end of the 2-minute period, the Server process will go away.
	
	REFERENCES
	==========
	
	For additional information, please see the following articles in the Microsoft
	Knowledge Base:
	
	  Q177394 : HOWTO: Troubleshoot Run-Time Error '429' in DCOM Applications
	
	  Q176799 : INFO: Using DCOM Config (DCOMCNFG) on Windows NT
	
	  Q269330 HOWTO: Troubleshoot DCOM for Visual Basic Client/Server Applications
	
	Additional query words:
	
	======================================================================
	Keywords          : kbDCOM kbRegistry kbVBp kbVBp600bug kbGrpDSVB kbDSupport 
	Technology        : kbVBSearch kbAudDeveloper kbZNotKeyword6 kbZNotKeyword2
	Version           : :6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
