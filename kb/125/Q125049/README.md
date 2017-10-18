---
layout: page
title: "Q125049: BUG: ExtractIcon Not Freeing Up Memory"
permalink: kb/125/Q125049/
---

## Q125049: BUG: ExtractIcon Not Freeing Up Memory

	Article: Q125049
	Product(s): Microsoft Windows Software Development Kit
	Version(s): WINDOWS:3.1
	Operating System(s): 
	Keyword(s): 
	Last Modified: 06-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows Software Development Kit (SDK) 3.1 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Calling ExtractIcon() with a -1 as the iIcon parameter to obtain the total
	number of icons in a file results in a loss of system resources. Each time an
	application calls ExtractIcon() in this manner, the system loses some resources.
	However, when the application that called ExtractIcon() terminates, the
	resources are freed. This situation can cause low memory conditions when an
	application that is running calls ExtractIcon() many times to find the number of
	icons in a number of different files.
	
	CAUSE
	=====
	
	The problem occurs when you call ExtractIcon() with the iIcon parameter set to
	-1 in order to count the number of icons. ExtractIcon() erroneously omits a
	GlobalFree call that is supposed to free some intermediate global memory used to
	count the number of icons in the specified file. As a result, each call made to
	ExtractIcon() in this manner results in a loss of memory and an occupied
	selector until the application terminates.
	
	RESOLUTION
	==========
	
	To work around the problem, you can extract consecutive icons in a file until
	ExtractIcon() fails. This will give you the total number of icons in the file
	without memory loss.
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the products listed at the beginning
	of this article. We are researching this bug and will post new information here
	in the Microsoft Knowledge Base as it becomes available.
	
	MORE INFORMATION
	================
	
	Below is a function that you could call to retrieve the number of icons in a
	file:
	
	  int NumIcons(HINSTANCE hinst, LPCSTR lpszExeName)
	     {
	     int i = 0;
	     HICON hIcon;
	
	     while (hIcon = ExtractIcon(hinst,lpszExeName,i))
	       {
	       i++;
	       DestroyIcon(hIcon);
	       }
	     return (i);
	     }
	
	Additional query words: 3.1
	
	======================================================================
	Keywords          :  
	Technology        : kbAudDeveloper kbWin3xSearch kbSDKSearch kbWinSDKSearch kbWinSDK310
	Version           : WINDOWS:3.1
	
	=============================================================================
	
