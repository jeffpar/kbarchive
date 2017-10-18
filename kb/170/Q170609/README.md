---
layout: page
title: "Q170609: FIX: PUTFILE Command to Drive &quot;A&quot; Without a Floppy Causes Fault"
permalink: kb/170/Q170609/
---

## Q170609: FIX: PUTFILE Command to Drive &quot;A&quot; Without a Floppy Causes Fault

	Article: Q170609
	Product(s): Microsoft FoxPro
	Version(s): WINDOWS:5.0,5.0a
	Operating System(s): 
	Keyword(s): kberrmsg kbvfp
	Last Modified: 24-MAR-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Visual FoxPro for Windows, versions 5.0, 5.0a 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	Issuing a PUTFILE command to Drive "A" without having a floppy disk in that
	drive causes an Invalid Page Fault in Visual FoxPro 5.0 and 5.0a.
	
	RESOLUTION
	==========
	
	Do not specify a drive letter in the PUTFILE command and allow the drive to be
	selected from the SAVE AS dialog box.
	
	NOTE: This is not the best remedy for this problem but it does prevent the
	Invalid Page Fault and subsequent closing of Visual FoxPro. The Invalid Page
	Fault does not occur in Visual FoxPro 3.0b.
	
	A better alternative to receiving the Invalid Page Fault is to verify whether the
	floppy drive has a disk in it prior to issuing the PUTFILE command. The
	following code is a function to which you pass to drive letter that is checked.
	The function returns a True (.T.) if there is a disk in the drive and a False
	(.F.) if the drive is empty.
	
	     **********************************************************
	     * FUNCTION isdiskin
	     **********************************************************
	     *
	     * Passed  - drive root specification, such as "A:\", "B:\", etc
	     * Returns - logical .T., .F. depending on whether drive exists
	     *
	     * Usage -
	     * ? isdiskin("A:\")
	     *
	     * Any drive formatted with an MS operating system > DOS 3.3 will
	     * have a nonzero volume serial number. If the specified drive
	     * doesn't exist, it will return a 0 volume serial number. So,
	     * GetVolumeInformation() can function as a  replacement
	     * for the old IsDiskIn.Bin that used to ship with FoxPro for DOS.
	      PARAMETERS m.rootpath
	
	     DECLARE GetVolumeInformation IN win32api STRING, STRING @, ;
	         INTEGER, INTEGER @, INTEGER @, INTEGER @, STRING @, INTEGER
	
	     m.volname = SPACE(255)
	     m.volnamelen = LEN(m.volname)
	     m.volumeserialnumber = 0
	     m.maxfilenamelen = 0
	     m.filesystemflags = 0
	     m.filesystemname = SPACE(255)
	     m.fsnamelen = LEN(m.filesystemname)
	
	     =GetVolumeInformation(m.rootpath, @m.volname, m.volnamelen, ;
	         @m.volumeserialnumber, @m.maxfilenamelen, ;
	         @m.filesystemflags, @m.filesystemname, m.fsnamelen)
	      IF m.volumeserialnumber = 0
	        RETURN .F.
	     ELSE
	        RETURN .T.
	     ENDIF
	
	
	Another resolution to the Invalid Page Fault problem is to issue a
	DISKSPACE("A"). This command returns a -1 if there is no disk in Drive "A" and
	returns some number greater than -1 if there is a disk in Drive "A."
	
	STATUS
	======
	
	Microsoft has confirmed this to be a bug in the Microsoft products listed at the
	beginning of this article. This has been corrected in Visual FoxPro 6.0.
	
	MORE INFORMATION
	================
	
	In Visual FoxPro 5.x, if the following code is issued and there is no floppy
	disk in the "A" drive, an Invalid Page Fault occurs and Visual FoxPro closes:
	
	     ? PUTFILE("Label File","A:\test","dbf")
	
	The following error message appears in Windows 95:
	
	  This program has performed an illegal operation and will be shut down.
	
	Clicking Details reveals the following message:
	
	  VFP caused an invalid page fault in module <module name> at <memory
	  address>.
	
	In Windows NT 4.0, the following error appears:
	
	  An application error has occurred and an application error log is being
	  generated.
	  VFP.exe
	  Exception: access violation <error number>, Address: <memory
	  address>.
	
	The operating system then closes Visual FoxPro.
	
	If the PUTFILE function is issued without specifying a drive letter, the Invalid
	Page Fault does not occur. A "SAVE AS" dialog box appears and if the "A" drive
	is selected and does not contain a floppy disk, the following non-fatal error
	message is issued:
	
	  A:\ is not accessible. The device is not ready.
	
	REFERENCES
	==========
	
	Visual FoxPro Help
	
	Additional query words:
	
	======================================================================
	Keywords          : kberrmsg kbvfp 
	Technology        : kbVFPsearch kbAudDeveloper kbVFP500 kbVFP500a
	Version           : WINDOWS:5.0,5.0a
	Issue type        : kbbug kbprb
	Solution Type     : kbfix
	
	=============================================================================
	
