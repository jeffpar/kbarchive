---
layout: page
title: "Q98342: Retrieving Group Names from a MM Viewer Title"
permalink: /kb/098/Q98342/
---

## Q98342: Retrieving Group Names from a MM Viewer Title

	Article: Q98342
	Product(s): Miscellaneous Software Development Kits
	Version(s): 2.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 14-NOV-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Multimedia Viewer Publishing Toolkit, version 2.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	The names and titles of the groups in a Multimedia Viewer version 2.0 title can
	be retrieved by using the Viewer function TitleGetInfo() with a value of 13 for
	the iInfoMsg parameter. The lParam2 parameter for TitleGetInfo() should be a far
	pointer to a text buffer to receive the group name and title. TitleGetInfo()
	writes a string of the form <groupname>.grp"<TitleName>" to this
	buffer. The LOWORD of lParam1 should specify the maximum number of characters to
	copy into the buffer supplied in lParam2, including the NULL terminator. The
	HIWORD of lParam1 should be the number of the group whose name and title should
	be retrieved. The groups in a title are numbered consecutively, starting at 0.
	TitleGetInfo() returns -1 if it is passed a group number that does not exist in
	the title.
	
	The following code loops through the groups in a title, and displays a message
	box with the contents of the buffer returned from TitleGetInfo():
	
	     #define MAXBUF 255
	     int icount;
	     char szBuf[MAXBUF];
	     HANDLE hTitle;
	
	     hTitle=TitleOpen("test");
	     icount=0;
	     while (TitleGetInfo(hTitle,13,MAKELONG(MAXBUF,icount),
	                (LONG)(LPSTR)szBuf)!=-1L)
	     {
	         MessageBox(NULL,szBuf,"Groups",MB_OK);
	         icount++;
	     }
	
	Additional query words: 2.00
	
	======================================================================
	Keywords          :  
	Technology        : kbHomeProdSearch kbHomeMMsearch kbMMViewer200
	Version           : :2.0
	
	=============================================================================
	
