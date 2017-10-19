---
layout: page
title: "Q249259: BUG: ATL OLE DB Provider not Working with OLE DB Services"
permalink: /kb/249/Q249259/
---

## Q249259: BUG: ATL OLE DB Provider not Working with OLE DB Services

	Article: Q249259
	Product(s): Microsoft C Compiler
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): kbATL kbDTL kbProvider kbVC kbVS600bug kbGrpDSVCDB kbDSupport
	Last Modified: 07-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual C++, 32-bit Enterprise Edition, version 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	An ATL-wizard generated OLE DB provider does not work with OLE DB Services such
	as resource pooling, transaction enlistment, or cursor services.
	
	CAUSE
	=====
	
	The ATL OLE DB Provider wizard incorrectly creates the OLEDB_SERVICES registry
	entry as a subkey instead of a DWORD value under the CLSID of the Provider.
	
	This registry setting is checked by the OLE DB services to determine if a
	provider supports use with its services.
	
	RESOLUTION
	==========
	
	The provider's OLEDB_SERVICES registry key needs to be set to 0xffffffff (Hex)
	or 4294967295 (Decimal) to let the services know that the provider can be used
	with any of the OLE DB services. For other possible values for the registry
	setting, see the Microsoft Developer Network (MSDN) documentation. Specifically,
	search on "Resource pooling".
	
	To fix the registry script file (.rgs) so that it properly registers the OLE DB
	provider for use with the OLE DB services, replace this line of code:
	
	   OLEDB_SERVICES = d '4294967295'
	
	with this:
	
	   val OLEDB_SERVICES = d '4294967295'
	
	Then compile and register the provider.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Create an ATL COM AppWizard project.
	
	2. Insert an ATL OLEDB Provider object.
	
	3. View the registry script file (.rgs).
	
	4. The OLEDB_SERVICES key is created as a subkey under the provider's CLSID.
	
	   OLEDB_SERVICES = d '4294967295'
	
	Additional query words:
	
	======================================================================
	Keywords          : kbATL kbDTL kbProvider kbVC kbVS600bug kbGrpDSVCDB kbDSupport 
	Technology        : kbVCsearch kbAudDeveloper kbVC600 kbVC32bitSearch
	Version           : WINDOWS:6.0
	Issue type        : kbbug
	
	=============================================================================
	
