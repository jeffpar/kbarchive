---
layout: page
title: "Q254957: BUG: Registry Update Code For MFC OLE Server Fails on W2K"
permalink: kb/254/Q254957/
---

## Q254957: BUG: Registry Update Code For MFC OLE Server Fails on W2K

	Article: Q254957
	Product(s): Microsoft C Compiler
	Version(s): 5.0,6.0
	Operating System(s): 
	Keyword(s): kbDocView kbMFC kbOLEApp kbVC kbVC600bug kbDSupport kbGrpDSMFCATL
	Last Modified: 11-JUN-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- The Microsoft Foundation Classes (MFC), included with:
	   - Microsoft Visual C++, 32-bit Editions, versions 5.0, 6.0, on platform(s):
	      - the operating system: Microsoft Windows 2000 
	-------------------------------------------------------------------------------
	
	IMPORTANT: This article contains information about modifying the registry. Before you modify the registry, make sure to back it up and make sure that you understand how to restore the registry if a problem occurs. For information about how to back up, restore, and edit the registry, click the following article number to view the article in the Microsoft Knowledge Base:
	
	  Q256986 Description of the Microsoft Windows Registry
	
	SYMPTOMS
	========
	
	When an unprivileged (for example, a non-administrator or a non-power) user runs
	a standard Microsoft Foundation Classes (MFC) OLE server on Windows 2000, the
	registry update fails and displays the following error message:
	
	  "Failed to update the system registry. Please try using REGEDIT."
	
	CAUSE
	=====
	
	This error occurs because each time an MFC OLE executable server runs, it calls
	the UpdateRegistry function in the COleTemplateServer class. The MFC
	UpdateRegistry function updates the registry entries in HKEY_CLASSES_ROOT for
	both the application and its document types. This update either creates the
	entries when the program is executed for the first time, or updates the entries
	to repair any damage that may have occurred. In Windows 2000, access to
	HKEY_CLASSES_ROOT is restricted to administrators and power users.
	
	RESOLUTION
	==========
	
	WARNING: If you use Registry Editor incorrectly, you may cause serious problems
	that may require you to reinstall your operating system. Microsoft cannot
	guarantee that you can solve problems that result from using Registry Editor
	incorrectly. Use Registry Editor at your own risk.
	
	To resolve the error and allow the server to register when it is executed by a
	privileged user, test the registry permissions when you open a key, as
	demonstrated in the following code:
	
	  HKEY hTestKey = NULL;
	  LONG lResult = ::RegCreateKeyEx(HKEY_CLASSES_ROOT, 
	                            "MFCOServ.Document", 0, "", 
	                            REG_OPTION_NON_VOLATILE, 
	                            KEY_ALL_ACCESS, NULL, 
	                            &hTestKey, NULL);
	  if ((ERROR_SUCCESS == lResult) && (hTestKey != NULL))
	  {
	     // It's ok to call UpdateRegistry
	  }
	
	Note that the second parameter to RegCreateKeyEx is the document type in the
	registry. This will be specific to your project.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Windows 2000 by default is a secure Windows environment. In this environment,
	unprivileged users may write to the following three specific locations:
	
	1. To their own portion of the registry, designated as HKEY_CURRENT_USER, with
	  following two exceptions:
	
	  Software\Policies
	
	and
	
	  \Software\Microsoft\Windows\CurrentVersion\Policies
	
	2. To their own user profile directory (CSIDL_PROFILE).
	
	3. A shared documents location (CSIDL_COMMON_DOCUMENTS).
	
	Applications must be installed by administrators and power users. An MFC OLE
	server, which has previously been registered by a privileged user, continues to
	run successfully after the error is resolved.
	
	Steps to Reproduce the Behavior
	-------------------------------
	
	1. Use the MFC AppWizard to generate an MFC executable application.
	
	2. On page 1 of the MFC AppWizard, select either the single-document or
	  multi-document application type.
	
	3. On page 3 of the MFC AppWizard, select either "full server" or "both
	  container and server" as the type of compound document support you want to
	  include.
	
	4. Accept the defaults on the remaining MFC AppWizard pages.
	
	5. Build the application.
	
	6. Under the logon of an unprivileged user, run the application and the error is
	  displayed. If the application was already registered on the computer, then
	  the error is resolved and the program continues to execute. If the
	  application was never registered on the target computer, it fails.
	
	REFERENCES
	==========
	
	Application Specifications for Microsoft Windows 2000 for Desktop Applications
	(Specifications\Platforms).
	Application Specifications for Microsoft Windows 2000 for Distributed
	Applications (Specifications\Platforms).
	Microsoft Windows 2000 Application Compatibility (Technical Articles\Windows
	Platform\Windows 2000).
	Microsoft Windows 2000 Group Policy (Backgrounders\Windows Platform\Windows
	2000)
	
	Additional query words: unprivileged COleTemplateServer UpdateRegistry
	
	======================================================================
	Keywords          : kbDocView kbMFC kbOLEApp kbVC kbVC600bug kbDSupport kbGrpDSMFCATL 
	Technology        : kbAudDeveloper kbMFC
	Version           : :5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
