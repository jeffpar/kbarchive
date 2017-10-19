---
layout: page
title: "Q161020: Implementing Windows 95 Updates"
permalink: /kb/161/Q161020/
---

## Q161020: Implementing Windows 95 Updates

	Article: Q161020
	Product(s): Microsoft Windows 95.x Retail Product
	Version(s): WINDOWS:95
	Operating System(s): 
	Keyword(s): osr2 win95
	Last Modified: 31-OCT-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows 95 
	- Microsoft Windows 95 OEM Service Release, versions 1.0, 2.0, 2.1, 2.5 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Microsoft stands behind its Windows 95 product, and develops updates for Windows
	95 as needed to resolve critical customer situations. This article provides
	general information about Windows 95 updates. Topics in this article include:
	
	- Windows 95 Update Version Information
	
	- Identifying Windows 95 Updates
	
	- The Windows 95 Update Information Tool (Qfecheck.exe)
	
	- Installing Windows 95 Updates on a Single Computer
	
	- Uninstalling Windows 95 Updates on a Single Computer
	
	- Installing Windows 95 Updates Using Server-Based Setup
	
	- Obtaining Windows 95 Updates
	
	- Knowledge Base Query Tips
	
	MORE INFORMATION
	================
	
	Windows 95 Update Version Information
	-------------------------------------
	
	The version numbers of the original retail and OEM release of Windows 95 and the
	OEM Service Releases are listed below. In general, files included with the
	indicated release of Windows 95 have the indicated version stamp.
	
	  Release                   Version          File dates
	  ----------------------------------------------------------
	  Windows 95 retail, OEM    4.00.950         7/11/95
	  Windows 95 retail SP1     4.00.950  0A     7/11/95
	  OEM Service Release 1     4.00.950A         12/31/95
	  OEM Service Release 2     4.00.1111*       8/24/96
	  OEM Service Release 2.1   4.03.1212-1214*  8/24/96-8/27/97
	  OEM Service Release 2.5   4.03.1214*       8/24/96-11/18/97
	
	NOTE
	
	- In the case of Windows 95 OEM Service Release 2 (OSR2), 2.1 (OSR 2.1) and 2.5
	  (OSR 2.5), not all files have this version stamp. In the case of OSR 2.1 and
	  OSR 2.5, only files updated to provide support for the Win32 Driver Model
	  (WDM) and Universal Serial Bus (USB) may have this version stamp (the
	  remainder maintain the same version stamps as the corresponding OSR2 files).
	
	- Windows 95 OEM Service Releases are not available for download.
	
	You can view a file's version information by using the right mouse button to
	click a file in Windows Explorer, clicking Properties on the menu that appears,
	and clicking the Version tab. If the property sheet for the file does not show a
	Version tab, there is no version information available for that file.
	
	With few exceptions, Windows 95 updates are stamped with a version number of
	4.00.951 or greater, indicating that the file is a newer version than originally
	included with Windows 95. Updates to Windows 95 OEM Service Release 2 (OSR2)
	generally have a version of 4.00.1112 or greater.
	
	It is possible that multiple fixes would be applied to the same component. With a
	few rare exceptions, these fixes are always cumulative. A change implemented in
	a given version of a particular component is also included in later versions of
	that component, along with any additional change implemented in the later
	versions. (For example, version 4.00.952 would contain the change implemented in
	version 4.00.951, as well as the new change.)
	
	The cumulative nature of these changes, combined with the incremented version
	numbers, means that, with very few exceptions, there is always one "current"
	version of a given component, containing all fixes made to that component to
	date.
	
	
	Identifying Windows 95 Updates
	------------------------------
	
	Nearly all Windows 95 update files can be positively identified by the following
	two characteristics, which can be viewed on the Version tab of the property
	sheet for the file:
	
	- A version number greater than the product release version.
	
	- An additional string resource named "Special Build Description" that is set
	  to the value "QFE."
	
	Some Windows 95 files do not contain version information to identify the file. In
	such cases, the modified date and size of the file can be examined and compared
	to the original release version of the file. These are not conclusive
	indicators, however, because the modified date can be affected by various
	conditions, and changes in a file may not result in a change in the file's
	size.
	
	The Windows 95 Update Information Tool (Qfecheck.exe)
	-----------------------------------------------------
	
	The Windows 95 Update Information tool (Qfecheck.exe) is installed with each
	Windows 95 update. This tool uses information stored in the registry, and
	version and special build information in the files themselves, to identify
	installed Windows 95 updates. This tool can be used to identify which Windows 95
	updates have been installed on a given computer.
	
	To run the Qfecheck tool, run the Qfecheck.exe file in the Windows folder (or in
	some rare cases, the Windows\System folder). The tool contains online help.
	
	For additional information about the Windows 95 Update Information tool, click
	the article number below to view the article in the Microsoft Knowledge Base:
	
	  Q145990 Windows 95 Update Information Tool (Qfecheck.exe)
	
	Installing Windows 95 Updates on a Single Computer
	--------------------------------------------------
	
	To install a Windows 95 Update on a single computer, run the self- extracting
	installer. This performs the following actions:
	
	1. Unpack the files that are needed for installation into a temporary folder.
	  These files typically include:
	
	   - The updated component file(s)
	
	   - The QFECHECK tool (Qfecheck.exe and Qfecheck.hlp)
	
	   - An .inf file used to uninstall the update
	
	   - An .inf file used to run the installation (W95upd.inf)
	
	   - In some cases, Advpack.dll, W95inf16.dll, and W95inf32.dll files
	
	2. Use the Windows 95 built-in Setup library (Setupx.dll) or an external setup
	  library (Advpack.dll) to install the specified update according to the
	  directives in the provided .inf file (W95upd.inf). This .inf file contains
	  directives to copy files to their appropriate locations, and add registry
	  settings as appropriate. Some later installer packages may use multiple .inf
	  files to allow a single package to install one of several different versions
	  of an updated file, depending on the version of Windows 95 that is
	  installed.
	
	  If a newer version of the updated component has already been installed, the
	  older version is not installed. In most cases, this occurs silently. For some
	  older installer packages, you may be prompted to keep or overwrite the
	  existing component.
	
	3. Inform you when the update is complete and prompt you to restart the
	  computer. When you click OK, the temporary files from step 1 are removed and
	  the installation program terminates.
	
	Uninstalling Windows 95 Updates on a Single Computer
	----------------------------------------------------
	
	In most cases, Windows 95 updates can be safely and easily uninstalled and
	replaced with the original versions of the updated components. This is typically
	facilitated by an .inf file copied to either the Windows\INF\QFE folder (in most
	cases), or to the Windows folder (for some older installer packages), during
	installation of the update. This file typically has a name of the form
	<xxxxx>_UN.INF. This .inf file can be used to uninstall the Windows 95
	update by right-clicking the file in Windows Explorer, and then clicking
	Install.
	
	When a Windows 95 update is uninstalled, you are prompted for the original
	Windows 95 installation disks or CD-ROM. The original version of the files are
	copied and overwrite the updated versions. An alternate file location may also
	be specified at this time. When uninstallation is complete, you typically need
	to restart the computer for the change to take effect.
	
	Installing Windows 95 Updates Using Server-Based Setup
	------------------------------------------------------
	
	Extracting Package Contents:
	
	Most Windows 95 update installer packages now support command-line switches that
	allow the contents of the package to be extracted to a specified directory,
	without launching the INF-driven installation routine. The command to perform
	this operation would be:
	
	"<path to update file>\<update filename>.EXE /C /T:<destination
	folder>" (without the quotation marks)
	
	For example, to extract the contents of XXXXXUPD.EXE, located in C:\DOWNLOAD, to
	the C:\UPDATE destination folder, the command would be:
	
	"C:\DOWNLOAD\XXXXXUPD.EXE /C /T:C:\UPDATE" (without the quotation marks)
	
	This functionality is available in Windows 95 update installer packages created
	after October 1996. If you are not certain whether a particular installer
	package supports this functionality, run the installer with a "/?" command-line
	switch. For example, type the following command:
	
	"C:\DOWNLOAD\XXXXXUPD.EXE /?" (without the quotation marks)
	
	If a window appears listing the available command-line switches for the package,
	you may use this command to extract the contents of the package to the desired
	destination folder. If, instead, a window appears prompting you to install the
	update, the installer package does not support these command-line switches, and
	the alternate method described below must be used to extract the contents of the
	package.
	
	Referring to the steps above for installing onto a single computer, note that the
	files used in the installation are located in a temporary folder until you click
	OK in the final prompt window. During this time, the files can be copied into a
	different folder and saved for further use. Depending on the specific Windows 95
	update being installed, this temporary folder may be one of the following
	folders:
	
	- Windows\Temp
	
	- The <temp> folder (as specified by the TEMP environment variable)
	
	- <temp>\Ixp000.tmp (as specified by the TEMP environment variable)
	
	Copying the Files to a Network Share:
	
	If Windows 95 workstations are being set up from a network share, the updated
	component files can be copied into the appropriate folder(s) on the network
	share before installing Windows 95 from this share. In this way, new
	workstations can be configured with the updated components from the very
	beginning.
	
	The appropriate folder into which to copy the updated component files depends
	upon the type of installation.
	
	- If the network installation share contains only the Windows 95 .cab files,
	  the updated component files should be copied into the same folder as the .cab
	  files. When Windows 95 Setup copies the file from this source to the
	  destination, it will copy standalone files from that folder, if they exist,
	  instead of the same files from within the .cab files.
	
	- If the network installation share is a server-based-Setup share point created
	  using the Netsetup tool (from the Windows 95 CD-ROM), the updated component
	  files should be copied into the same folder as the components they replace,
	  overwriting the original versions of those files. Note that a given file may
	  appear in more than one folder, so be sure to update all instances of the
	  original file.
	
	The .inf file used to install Windows 95 updates (W95upd.inf) includes registry
	information that is either necessary for the update to provide the intended
	functionality, or is simply useful in tracking which updates have been
	installed. We recommend that this file be examined by the administrator, and the
	appropriate sections merged into the Msbatch.inf file used during Setup, to
	ensure that this registry information is incorporated when the update is
	installed.
	
	To install Windows 95 updates on existing Windows 95 workstations that are
	running a shared installation of Windows 95 from a server, it is normally
	sufficient to update the component files in the shared folder. In very rare
	cases, updates to real-mode components will require the files to be copied to
	the individual computers, either on the server or on the workstation's local
	hard disk or boot floppy disk.
	
	To install Windows 95 updates on existing Windows 95 workstations that are
	running local, standalone installations of Windows 95, one of the following
	methods can be used:
	
	- Network Systems-Management software. Products such as Microsoft's System
	  Management Server can be used to automate software updates. Once the updated
	  component files are extracted and registry updates identified, these can be
	  distributed according to the functionality provided by such products.
	
	- Logon scripts. If Windows NT or NetWare logon scripts are in use, a command
	  can be added to check whether a particular update has been installed, and
	  launch the installer if needed. For example:
	
	        IF NOT EXIST %WINDIR%\xxxxx_UN.INF START xxxxxUPD.EXE
	
	- E-mail. The self-extracting installer can be distributed in an e-mail
	  attachment. Upon receiving the e-mail, users would run the attached installer
	  to install the update. The e-mail attachment could also consist of a shortcut
	  to the installer in a shared folder on the network.
	
	- Intranet Web site. The self-extracting installer can be placed on an internal
	  Web site, where users could go to install the update.
	
	These methods are suggestions. There may be other methods not listed here that
	can be used to distribute these software updates.
	
	NOTE: When the self-extracting installer is used to install the Windows 95
	update, a check is made to ensure that a newer version of the component is not
	inadvertently overwritten with the version being installed. If an alternate
	installation method is used, care must be taken to prevent replacing a newer
	component with an older one. In some cases, replacing a newer component with an
	older one could render the computer unable to boot.
	
	Obtaining Windows 95 Updates
	----------------------------
	
	Categorized by availability and distribution methods, Windows 95 updates fall
	into two primary categories: those available publicly from online sources, and
	those not available publicly, but only available by contacting Microsoft
	Technical Support.
	
	
	Publicly-distributed Windows 95 updates are available to be downloaded from the
	Microsoft Download Center. For additional information about how to download
	Microsoft Support files, click the article number below to view the article in
	the Microsoft Knowledge Base:
	
	  Q119591 How to Obtain Microsoft Support Files from Online Services
	
	Microsoft used the most current virus detection software available on the date of
	posting to scan this file for viruses. Once posted, the file is housed on secure
	servers that prevent any unauthorized changes to the file.
	
	To determine which file to download, query the Microsoft Knowledge Base to find
	the article that references the issue. Specific instructions are included in
	each article.
	
	Windows 95 updates that are not publicly distributed can be obtained by
	contacting Microsoft Technical Support, through any of our direct support
	offerings, including telephone.
	
	
	
	Note that server-based Setup (using Netsetup) of Windows 95 OEM Service release 2
	and 2.1 (OSR2) is not supported. OSR2 was designed to be preinstalled on new
	computers by computer manufacturers. One of the main components, the FAT32 file
	system, requires that the computer's hard disk be repartitioned. For this
	reason, OSR2 is not distributed to resellers.
	
	Attempts to distribute OSR2 using Netsetup result in users being prompted for a
	Product ID number. This number is usually listed on the Microsoft Certificate of
	Authenticity. Modifying the Msbatch.inf file does not prevent this prompt.
	
	Knowledge Base Query Tips
	-------------------------
	
	Information about specific Windows 95 updates and issues resolved by these
	updates can be found in the Microsoft Knowledge Base by querying on the issue's
	symptoms.
	
	
	
	Additional query words:
	
	======================================================================
	Keywords          : osr2 win95 
	Technology        : kbWin95search kbOPKSearch kbZNotKeyword3 kbWin95OPKOSR25 kbWin95OPKOSR210
	Version           : WINDOWS:95
	Issue type        : kbinfo
	
	=============================================================================
	
