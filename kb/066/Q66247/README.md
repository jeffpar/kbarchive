---
layout: page
title: "Q66247: MENUITEMTEMPLATE Structure Is Documented Incorrectly"
permalink: /kb/066/Q66247/
---

## Q66247: MENUITEMTEMPLATE Structure Is Documented Incorrectly

	Article: Q66247
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kbfile kbsample kbdocerr kb16bitonly kbMenu kbGrpDSUser kbOSWin310 kbOSWin300
	Last Modified: 09-DEC-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	MenuTemp.exe is a sample program in that demonstrates how to use the
	MENUITEMTEMPLATE structure and the LoadMenuIndirect() function.
	
	The MENUITEMTEMPLATE structure is found in WINDOWS.H, which declares the
	structure as follows:
	
	     typedef struct
	         {
	         WORD    mtOption;
	         WORD    mtID;
	         char    mtString[1];
	         } MENUITEMTEMPLATE;
	
	Single-item arrays, such as mtString, provide a named field to use to access
	memory. The actual text of the string is stored in the structure, not a pointer
	to text stored elsewhere.
	
	MORE INFORMATION
	================
	
	The following files are available for download from the Microsoft Download
	Center:
	
	MenuTemp.exe
	
	For additional information about how to download Microsoft Support files, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	
	The declaration of MENUITEMTEMPLATE in WINDOWS.H from the Windows SDK version 3.1
	is correct. If a program attempts to assign an LPSTR to mtString, the C compiler
	generates an error. Listed below is an erroneous code sample:
	
	     MENUITEMTEMPLATE    mit;
	     LPSTR               lpch;
	     ...
	     mit.mtString = lpch;
	     ...
	
	The mtString field is a 1-byte placeholder for the array. Because a LPSTR is 4
	bytes long, it cannot be assigned to a 1-byte quantity.
	
	The mtString[1] declaration in the structure serves as a placeholder for an
	arbitrary number of characters. An application that uses the MENUITEMTEMPLATE
	structure must allocate memory both for the template itself and the string that
	is copied into mtString.
	
	The following code sample demonstrates how an application might create a
	MENUITEMTEMPLATE structure for a checked menu item having an ID value of 100 and
	"&Menuitem" as its text:
	
	  HANDLE              hMem;
	     LPMENUITEMTEMPLATE  lpmit;
	     static char         szMenuItem[] = "&Menuitem";
	
	     ...
	
	     // Note that the single char in the MENUITEMTEMPLATE structure
	     // provides space for the null terminator on the string.
	     hMem = LocalAlloc(LMEM_MOVEABLE, sizeof(MENUITEMTEMPLATE)
	                                         + lstrlen(szMenuItem));
	
	     // LocalLock function returns a near pointer;
	     // no problem casting to a far pointer
	     lpmit = (LPMENUITEMTEMPLATE)LocalLock(hMem);
	
	     // Set the ID and the checked flag.
	     lpmit->mtOption = MF_CHECKED;
	     lpmit->mtID = 100;
	
	     // Copy the menu item text.
	     lstrcpy(lpmit->mtString, szMenuItem);
	
	     ...
	
	     // Make the following call, when a pointer is no longer needed.
	     LocalUnlock(hMem);
	
	     ...
	
	     // Make the following call, when the MENUITEMTEMPLATE
	     // is no longer needed.
	     LocalFree(hMem);
	
	     ...
	
	Additional query words:
	
	======================================================================
	Keywords          : kbfile kbsample kbdocerr kb16bitonly kbMenu kbGrpDSUser kbOSWin310 kbOSWin300 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
