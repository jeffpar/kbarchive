---
layout: page
title: "Q216986: BUG: QueryInterface Returning E_NOINTERFACE"
permalink: /kb/216/Q216986/
---

## Q216986: BUG: QueryInterface Returning E_NOINTERFACE

	Article: Q216986
	Product(s): Microsoft SourceSafe
	Version(s): WINDOWS:5.0,6.0
	Operating System(s): 
	Keyword(s): kbAutomation kbSSafe500bug kbSSafe600bug _IK
	Last Modified: 01-MAY-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual SourceSafe for Windows, versions 5.0, 6.0 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When creating OLE Automation in C that communicates with Microsoft Visual
	SourceSafe (VSS), if the program is created using VSS 5.0 OLE Automation and is
	then run on a computer that is using VSS 6.0, QueryInterface for versions can
	fail for the IID_IVSSVersion.
	
	CAUSE
	=====
	
	The VSS 6.0 Automation ignores the 5.0 IID_IVSSVersion.
	
	
	RESOLUTION
	==========
	
	If you have to create code that will run on computers using VSS 5.0 or VSS 6.0,
	see the following steps.
	
	1. Follow the steps in:
	
	  HOWTO: Write automation for computers using VSS 5 or VSS 6.
	
	2. Create two separate programs and call the correct one based on what version
	  of VSS the computer is using.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article.
	
	MORE INFORMATION
	================
	
	Steps to Reproduce Behavior
	---------------------------
	
	1. Follow the steps in:
	
	  HOWTO: Open a SourceSafe Database with OLE Automation in C++
	
	2. Add the following code at the top of the program:
	
	     #include <objbase.h>
	     #include <initguid.h>
	     #include <stdio.h>
	
	     #define MAKEHR(iStat) MAKE_HRESULT(SEVERITY_ERROR, FACILITY_ITF,(USHORT) (iStat))
	   
	
	3. Add the following code where the "// Add code here..." is:
	
	     IVSSVersions* pVersions = NULL;
	     IVSSVersion* pVersion = NULL;
	     IVSSItem* pItem = NULL;
	     IUnknown* pEnumerator = NULL;
	     IEnumVARIANT* pVariant = NULL;
	     Variant v;
	     unsigned long actual;
	     int error, nointerface;
	     BSTR Root = SysAllocString(L"$/");
	
	     VariantInit(&v);
	     pVdb->get_VSSItem(Root, FALSE, &pItem);
	     pItem->get_Versions(0, &pVersions);
	     pVersions->_NewEnum(&pEnumerator);
	     pEnumerator->QueryInterface(IID_IEnumVARIANT, (void **) &pVariant);
	     pEnumerator->Release();
	     pVariant->Next((unsigned long) 1, &v, &actual);
	     error = v.pdispVal->QueryInterface(IID_IVSSVersion, (void **) &pVersion);
	     nointerface = MAKEHR(E_NOINTERFACE);
	     if (error == nointerface)
	     printf("No Interface Error.\n");
	
	4. Compile and run the program. You should get an error number returned from the
	  QueryInterface call with IID_IVSSVersion.
	
	NOTE: This code should be created on a computer with VSS 5.0 and then run on a
	computer with VSS 6.0. If you want to create and run the program on a VSS 6.0
	computer, use IID_IVSSVersionOld instead of IID_IVSSVersion.
	
	Additional query words: OLE Automation
	
	======================================================================
	Keywords          : kbAutomation kbSSafe500bug kbSSafe600bug _IK 
	Technology        : kbSSafeSearch kbAudDeveloper kbSSafe600 kbSSafe500
	Version           : WINDOWS:5.0,6.0
	Issue type        : kbbug
	Solution Type     : kbpending
	
	=============================================================================
	
