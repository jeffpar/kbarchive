---
layout: page
title: "Q268770: PRB: LoadPicture and SavePicture Entry Points Are Not Found"
permalink: /kb/268/Q268770/
---

## Q268770: PRB: LoadPicture and SavePicture Entry Points Are Not Found

	Article: Q268770
	Product(s): Microsoft Programming Utilities
	Version(s): 
	Operating System(s): 
	Keyword(s): kbCOMt kbGrpDSCom kbDSupport
	Last Modified: 12-JUL-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft COM 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The following module section in Stdole2.tlb indicates that it is defining the
	LoadPicture and SavePicture functions entry points in Oleaut32.dll:
	
	      module StdFunctions {
	          [entry(0x60000000), helpstring("Loads a picture from a file"), helpcontext(0x00002775)]
	          HRESULT _stdcall LoadPicture(
	                          [in, optional] VARIANT filename, 
	                          [in, optional, defaultvalue(0)] int widthDesired, 
	                          [in, optional, defaultvalue(0)] int heightDesired, 
	                          [in, optional, defaultvalue(0)] LoadPictureConstants flags, 
	                          [out, retval] IPictureDisp** retval);
	          [entry(0x60000001), helpstring("Saves a picture to a file"), helpcontext(0x00002775)]
	          HRESULT _stdcall SavePicture(
	                          [in] IPictureDisp* Picture, 
	                          [in] BSTR filename);
	      };
	
	The following code obtains the LoadPicture entry point:
	
	  HMODULE hInst = LoadLibrary("oleaut32.dll");
	  pnfLoadPicture = GetProcAddress(hInst, "LoadPicture");
	  pnfLoadPicture = GetProcAddress(hInst, MAKEINTRESOURCE(0x60000000));
	
	However, this code fails with "the specified procedure could not be found" error.
	This error indicates that the entry points are not defined in Oleaut32.dll.
	
	You encounter similar behavior for SavePicture.
	
	CAUSE
	=====
	
	These entry points are defined for future feature implementation. They are not
	implemented and may not be implemented. The definitions in Stdole2.tlb are
	retained for backward compatibility with existing applications.
	
	RESOLUTION
	==========
	
	To instantiate the IPicture interface, you can use the OleLoadPicture and
	OleCreatePictureIndirect functions. IPicture's properties and methods can be
	used to manage the picture objects.
	
	REFERENCES
	==========
	
	For additional information, click the article number below to view the article
	in the Microsoft Knowledge Base:
	
	  Q218972 How To Load and Display Graphics Files w/LOADPIC.EXE
	
	Additional query words:
	
	======================================================================
	Keywords          : kbCOMt kbGrpDSCom kbDSupport 
	Technology        : kbAudDeveloper kbCOM kbCOMPlusSearch
	Version           : :
	Issue type        : kbprb
	
	=============================================================================
	
