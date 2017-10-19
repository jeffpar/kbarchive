---
layout: page
title: "Q193773: HOWTO: Detect File System Changes under Windows NT"
permalink: /kb/193/Q193773/
---

## Q193773: HOWTO: Detect File System Changes under Windows NT

	Article: Q193773
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:6.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 03-AUG-1999
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, version 6.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows NT provides the FindFirstChangeNotification() API function that allows
	application programs to detect when changes occur in the file system. It can
	detect when a file or directory is added, changed, deleted, and when a file's
	size, attributes, or security descriptors change.
	
	NOTE: This code is somewhat complex, and engineers may require some time to
	familiarize themselves with the contents and concepts of the example.
	
	MORE INFORMATION
	================
	
	1. Create a directory C:\TEST if a directory by that name does not already
	  exist, or modify the variable lcPathSpec in the sample code to point to a
	  directory of your choice.
	
	2. Save and execute the following code. The code appears to 'hang' Visual FoxPro
	  when it executes the call to the WaitForSingleObject() function. This line
	  causes the application to enter a very processor-efficient wait state:
	
	  
	
	        DECLARE LONG WaitForSingleObject IN kernel32 ;
	           INTEGER hHandle, ;
	           INTEGER dwMilliseconds
	
	        DECLARE LONG FindFirstChangeNotification IN kernel32 ;
	           STRING lpPathName, ;
	           INTEGER bWatchSubtree, ;
	           INTEGER dwNotifyFilter AS LONG)
	
	        DECLARE LONG FindNextChangeNotification IN kernel32 ;
	           INTEGER hChangeHandle
	
	        DECLARE LONG GetLastError IN kernel32
	        DECLARE LONG FindCloseChangeNotification IN kernel32 ;
	           INTEGER hChangeHandle
	
	        * Only the second constant is demonstrated in this
	        * example; the others are listed for convenience.
	
	        * A file has been created, renamed or deleted.
	        #DEFINE FILE_NOTIFY_CHANGE_FILE_NAME 0x01
	
	        * Directory has been created, renamed or deleted.
	        #DEFINE FILE_NOTIFY_CHANGE_DIR_NAME 0x02
	
	        * A file's attribute (archive, read-only) has been changed.
	        #DEFINE FILE_NOTIFY_CHANGE_ATTRIBUTES 0x04
	
	        * A file's size has changed.
	        #DEFINE FILE_NOTIFY_CHANGE_SIZE 0x08
	
	        * A file's last write data has changed.
	        #DEFINE FILE_NOTIFY_CHANGE_LAST_WRITE 0x10
	
	        * A security descriptor for a directory or file has been changed.
	        #DEFINE FILE_NOTIFY_CHANGE_SECURITY 0x100
	
	        * Look for any changes - bitwise OR these values together.
	        #DEFINE FILE_NOTIFY_ALL = FILE_NOTIFY_CHANGE_ATTRIBUTES BITOR ;
	           FILE_NOTIFY_CHANGE_DIR_NAME BITOR ;
	           FILE_NOTIFY_CHANGE_FILE_NAME BITOR ;
	           FILE_NOTIFY_CHANGE_LAST_WRITE BITOR ;
	           FILE_NOTIFY_CHANGE_SECURITY BITOR ;
	           FILE_NOTIFY_CHANGE_SIZE
	
	        #DEFINE INVALID_HANDLE_VALUE -1
	        #DEFINE INFINITE 2147483647
	        #DEFINE WAIT_FAILED 2147483647
	        #DEFINE True -1
	        #DEFINE False 0
	
	        lcPathSpec = "C:\TEST"
	        lbWatchSubtree = True
	
	        * Watch for a directory added, changed or deleted beneath the
	        * specified PathSpec.
	        lihNotify = FindFirstChangeNotification(lcPathSpec, lbWatchSubtree, ;
	           FILE_NOTIFY_CHANGE_DIR_NAME)
	
	        IF lihNotify <= INVALID_HANDLE_VALUE
	           MESSAGEBOX ("FindFirstChangeNotification failed. Error code: " + ;
	              LTRIM(STR(GetLastError())))
	           RETURN
	        ELSE
	        * Uncomment for debugging purposes.
	        *   MessageBox ("FindFirstChangfeNotification instantiation ;
	        *       succeeded. Handle is: " + ltrim(str(lihNotify)))
	        ENDIF
	
	        * Now, go into a wait state.
	        * This is going to look like a hang, since the IDE is all in
	        * one thread.
	        liWaitReturn = WaitForSingleObject(lihNotify, INFINITE)
	        IF liWaitReturn >= WAIT_FAILED
	            MESSAGEBOX ("WaitForSingleObject failed. Error is: " + ;
	               LTRIM(STR(GetLastError())))
	           RETURN
	        ELSE
	            MESSAGEBOX ("Directory change in " + lcPathSpec + " occurred")
	        ENDIF
	
	        liWaitReturn = FindCloseChangeNotification(lihNotify)
	
	3. In the Windows NT Explorer, create a new directory underneath C:\TEST, using
	  File/New Folder. As soon as the directory is created, a message box appears
	  in the Visual FoxPro application notifying you of the directory change.
	
	REFERENCES
	==========
	
	"Advanced Windows", Jeffrey Richter, Microsoft Press, pages 664-687, Third
	Edition 1997 ISBN: 1-57231-548-2
	
	Additional query words: kbVFp600 kbAPI
	
	======================================================================
	Keywords          :  
	Technology        : kbVFPsearch kbAudDeveloper kbVFP600
	Version           : WINDOWS:6.0
	Issue type        : kbhowto
	
	=============================================================================
	
