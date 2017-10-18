---
layout: page
title: "Q43369: PRB: RCPP.EXE Error: Compiler Limit: Macro Expansion Too Big"
permalink: kb/043/Q43369/
---

## Q43369: PRB: RCPP.EXE Error: Compiler Limit: Macro Expansion Too Big

	Article: Q43369
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.0,3.1
	Operating System(s): 
	Keyword(s): kb16bitonly
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) versions 3.0, 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	The Windows Resource Compiler produces the following error message:
	
	  ~rc1234.tmp(145) : FATAL : compiler limit : macro expansion too big EXEC
	  Failed - make sure RCPP.EXE is installed correctly.
	
	This error message may be encountered when you are using a "chaining" technique
	to define the identifiers for strings that are located within a stringtable in
	your resource file.
	
	The identifiers are defined in an include file. "Chaining" means that the value
	of an identifier depends on the value of the previous identifier plus a
	predefined increment. The following is an example:
	
	  #define  ID_START    100
	  #define  ID_INC      1
	
	  #define  ID1         ID_START
	  #define  ID2         ID1 + ID_INC
	  #define  ID3         ID2 + ID_INC
	  #define  ID4         ID3 + ID_INC
	  #define  ID5         ID4 + ID_INC
	     :      :                     :
	     :      :             :
	    etc    etc           etc
	
	The advantage of this "chaining" technique is that when identifiers are added, it
	ensures that every identifier will be unique.
	
	CAUSE
	=====
	
	This problem is occurring because the RC compiler does not do mathematical
	computation. The lines of code above would actually be expanded as follows:
	
	  ======== Original code ========  =========== EXPANDED CODE ========
	  #define  ID_START    100         100
	  #define  ID_INC        1         1
	
	  #define  ID1    IDSTART          100
	  #define  ID2    ID1 + ID_INC     100 + 1
	  #define  ID3    ID2 + ID_INC     100 + 1 + 1
	  #define  ID4    ID3 + ID_INC     100 + 1 + 1 + 1
	
	  etc.
	
	What is happening is that after so many lines, the expansion of the line is
	exceeding the buffer allotted for macro expansions. Since the RC compiler does
	not do arithmetic, it interprets all #defines as characters.
	
	Additional query words: 3.00 3.10
	
	======================================================================
	Keywords          : kb16bitonly 
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK300 kbWinSDK310
	Version           : WINDOWS:3.0,3.1
	
	=============================================================================
	
