---
layout: page
title: "Q143003: Description of Microsoft Windows 95 Service Pack 1 Updates"
permalink: /kb/143/Q143003/
---

## Q143003: Description of Microsoft Windows 95 Service Pack 1 Updates

	Article: Q143003
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): Win2000:95
	Operating System(s): 
	Keyword(s): win95
	Last Modified: 17-DEC-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article contains information about the updates included with Microsoft
	Windows 95 Service Pack 1.
	
	For information about obtaining Microsoft Windows 95 Service Pack 1, please see
	the following article in the Microsoft Knowledge Base:
	
	  Q142794 Availability of Microsoft Windows 95 Service Pack 1
	
	MORE INFORMATION
	================
	
	The following updates are provided with Microsoft Windows 95 Service Pack 1 and
	are installed when you run Setup.exe.
	
	File and Printer Sharing for Microsoft Networks Update
	------------------------------------------------------
	
	Vserver.vxd New file version: 4.0.0.952
	
	This update corrects a problem with File and Printer Sharing for Microsoft
	Networks and Samba's SMBCLIENT UNIX network client. The update corrects a
	problem with share-level security and includes a correction for a similar
	problem with user-level security that Microsoft recently discovered as part of
	its internal testing of the new driver. Windows 95 allows users of the Samba SMB
	client to access the drive on which sharing is enabled by accepting certain
	specific networking commands. The Samba client is the only known SMB client that
	sends such networking commands.
	
	SMBCLIENT users do not automatically have access to the drive on the Windows
	95-based computer, and must know the exact steps to send these commands. The
	updated driver prevents Windows 95 from accepting these commands, preventing
	SMBCLIENT users from accessing the drive on which sharing is enabled. With the
	updated driver, the SMBCLIENT user has access only to those shared folders that
	the Windows 95 user has designated. For more information on this update, please
	see the following article in the Microsoft Knowledge Base:
	
	  Q128079 Updated Drivers for File and Printer Sharing Security
	
	File and Printer Sharing for NetWare Networks Update
	----------------------------------------------------
	
	File: Nwserver.vxd New file version: 4.0.0.951
	
	Microsoft recently became aware of an issue with File and Printer Sharing for
	NetWare Networks that may affect data security for corporate users. If your
	computer is configured for file and printer sharing and the Remote
	Administration service is enabled, another user on the network may gain
	read-only access to your computer after the administrator has logged off and
	before you have restarted your computer. To correct this problem, Microsoft has
	released an updated driver for File and Printer Sharing for NetWare Networks.
	The updated driver ensures that only valid administrators have access to the
	computer's hard disk.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q128079 Updated Drivers for File and Printer Sharing Security
	
	LPT Port Driver Update for ECP Ports
	------------------------------------
	
	File: Lpt.vxd New file version: 4.0.0.951
	
	Microsoft Windows 95 Service Pack 1 automatically installs a version of the
	parallel port driver (Lpt.vxd) that corrects issues seen on some computers
	equipped with ECP ports. This driver is functionally identical to Lpt.vxd
	version 4.0.0.503, which is included on the Windows 95 CD-ROM in the
	Drivers\Printer\Lpt folder.
	
	Microsoft Client for Microsoft Networks Update
	----------------------------------------------
	
	File: Vredir.vxd New file version: 4.0.0.955
	
	The Client for Microsoft Networks update fixes a problem that affects only
	Windows 95 users who use Samba servers. The problem arises from the basic
	Windows 95 and UNIX file name formats. UNIX allows file names that include the
	"\" and "*" characters, but these are wildcard characters in Windows 95. If a
	Samba server contains a file named \\<server>\<share>\*.* (which is
	a valid UNIX file name), and you try to delete this file from a Windows 95-based
	computer using Windows Explorer or My Computer, all the files on
	\\<server>\<share> are deleted instead. The updated version of the
	Client for Microsoft Networks prevents this from occurring by rejecting file
	names that contain the "\" or "*" characters.
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q140558 Deleting Files on Samba Servers May Delete Local Files Instead
	
	Microsoft OLE32 Update
	----------------------
	
	File: Ole32.dll New file version: 2.10.35.37
	
	The Windows 95 OLE32 update addresses file-management behavior in Microsoft Word,
	Microsoft Excel, and Microsoft PowerPoint for Windows 95, versions 7.0. Because
	of the way these programs use OLE for file storage, document files created in
	these programs may contain extraneous data from previously deleted files. This
	data is not visible while you use the programs. However, it may be possible to
	view a document file using Notepad or file-utility software and find legible
	pieces of information from previously deleted files. This may pose information
	security and privacy concerns if you distribute electronic versions of files
	created using these programs. The OLE32 update corrects this behavior. Although
	the problem is known to occur only in Microsoft Excel, Word, and PowerPoint for
	Windows 95, the OLE32 update is designed to prevent any program from potentially
	causing the same problem.
	
	NOTE: There is a newer OLE update for Windows 95 than the update contained in
	Service Pack 1. The newer update fixes the problem described above, as well as
	two other issues. For information about the newer update, please see the
	following article in the Microsoft Knowledge Base:
	
	  Q139432 OLE Update for Windows 95
	
	Microsoft Plus! System Agent Update Update
	------------------------------------------
	
	File: Sage.dll New file version: 4.40.0.311
	
	The Microsoft Plus! Update Kit provides an updated version of the Sage.dll file
	to fix a minor problem with System Agent. When System Agent version 1.0 is
	running, programs that perform floating-point calculations may be slightly off
	in precision. This problem does not occur if System Agent is disabled. For more
	information on this update, see the following article in the Microsoft Knowledge
	Base:
	
	  Q140479 Updated Sage.dll File Corrects Floating-Point Math Errors
	
	Windows 95 Common Dialog Update
	-------------------------------
	
	File: Comdlg32.dll New file version: 4.0.0.951
	
	This update corrects an issue that occurs when 32-bit programs print using
	Windows 3.1 monolithic drivers or the Windows 3.1 Pscript.drv and Unidrv.dll
	drivers in Windows 95. When you use this configuration, the program may stop
	responding (hang).
	
	Windows 95 Password List Update
	-------------------------------
	
	File: Mspwl32.dll New file version: 4.0.0.951
	
	File: Net.exe New file version: 4.00.951
	
	The Windows 95 Password List update version 4.00.951 protects your password file
	against potential security violations. When you connect to a password- protected
	resource, such as a network drive, you can choose to save that password. Windows
	95 then stores the password in an encrypted file on your hard disk. Recently, an
	algorithm was posted on the Internet for decrypting this file. If someone has
	access to your password file and knows the decryption algorithm, he or she may
	be able to decrypt it and the passwords it contains, gaining access to the
	password-protected resources. The Password List update provides vastly improved
	encryption that is 2^96 (2 to the 96th power) harder to decrypt than the
	previous encryption method.
	
	Microsoft has released the Windows 95 Password List update version 9.00.952. For
	more information on this update, see the following article in the Microsoft
	Knowledge Base:
	
	  Q132807 Enhanced Encryption for Windows 95 Password Cache
	
	Windows 95 Shell Update
	-----------------------
	
	File: Shell32.dll New file version: 4.0.0.951
	
	This update to the Windows 95 Shell32.dll file fixes a problem in which a file
	copied onto itself can be truncated to a zero-length file. This occurs only in
	the following circumstances:
	
	- When you copy a file onto itself using two different views of the same
	  network resource (these can be different mapped drive letters or UNC
	  connections to a network resource).
	
	- When you copy a file onto itself using a drive that was created by the SUBST
	  command.
	
	This update to the Shell32.dll file also makes it possible to browse Novell
	NetWare Directory Service printers from the Add Printer Wizard (provided you
	have installed the Service for NetWare Directory Services).
	
	For additional information, please see the following article in the Microsoft
	Knowledge Base:
	
	  Q138014 File May Be Truncated to Zero Bytes When Copied Onto Itself
	
	Additional query words: w95setfaq
	
	======================================================================
	Keywords          : win95 
	Technology        : kbWin95search kbZNotKeyword3
	Version           : Win2000:95
	
	=============================================================================
	
