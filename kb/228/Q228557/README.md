---
layout: page
title: "Q228557: SFU: Services for UNIX - Readme File"
permalink: /kb/228/Q228557/
---

## Q228557: SFU: Services for UNIX - Readme File

{% raw %}

	Article: Q228557
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 10-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Services for UNIX Add-On Pack 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	**********************************************************************
	Microsoft Windows NT Services for UNIX Release Notes
	**********************************************************************
	
	The following tips will be helpful as you install and use the 
	Microsoft Windows NT Services for UNIX Add-On Pack.
	
	======================================================================
	Setup
	======================================================================
	You cannot upgrade from a beta version of Microsoft Windows NT Services 
	for UNIX Add-On Pack. If you have installed a beta version, you must 
	reinstall Windows NT 4.0 using the New Installation setup option and 
	then reinstall Service Pack 3 before you install Microsoft Windows NT 
	Services for UNIX Add-On Pack.
	
	If you already have any third-party version of Telnet server installed 
	on your computer, you must remove it before you install the version of
	Telnet server provided with Microsoft Windows NT Services for UNIX 
	Add-On Pack.
	
	Upgrades from Intergraph DiskAccess and DiskShare 3.0 are not supported.
	
	Microsoft Windows NT Services for UNIX Add-On Pack has not been tested 
	on Windows NT 4.0 Terminal Server or Windows NT 4.0 Enterprise Edition. 
	Use on these operating systems is not supported. 
	
	======================================================================
	Silent Installation (Setup /s)
	======================================================================
	Silent installation does not require the user to enter any information 
	or make any choices during the installation process. 
	
	To perform silent installation
	
	1. Copy the folder that contains the files for your type of processor 
	  (i386 or Alpha) from the CD to your computer. 
	
	2. Open scsetup.inf in a text editor and find the following line of code
	  (the first line following the comments): 
	    Windows NT Services for UNIX,\SFU,
	
	3. Add the PID to the end of the line. For example, after editing 
	  scsetup.inf the first line would look something like the: 
	    Windows NT Services for UNIX,\SFU,X2Y23-W2B2A-XYZRA-ZEBRA-LAST5.
	
	4. Save scsetup.inf. 
	
	5. In the Start/Run dialog box, type the path to the directory that 
	  contains the installation files followed by setup /s.
	
	======================================================================
	Installing the Microsoft Windows NT Services for UNIX Add-On Pack 
	with FX!32
	======================================================================
	Services for UNIX cannot be installed while FX!32 is running. To install
	Services for UNIX, first turn off FX!32. Following the reboot at the end
	of the installation process, restart FX!32. 
	
	FX!32 also needs to be turned off before Services for UNIX can be 
	uninstalled.
	
	======================================================================
	Uninstall Procedure
	======================================================================
	You can uninstall Microsoft Windows NT Services for UNIX Add-On Pack by 
	using the uninstall feature provided with the product. You can gain 
	access to this feature by selecting either:
	  *Uninstall under Common in the Services for UNIX Program Group
	  *Services for UNIX under Add/Remove Programs in the Control Panel
	
	======================================================================
	Installing MKS Demoware
	======================================================================
	You can manually install the MKS Demoware by running install.bat from 
	the 3rdparty\mks directory on the Microsoft Windows NT Services for UNIX
	Add-On Pack CD.
	
	Mortice Kern Systems (MKS) has provided this trial product as a courtesy
	to Services for Unix customers.  Microsoft does not provide support for 
	the MKS demoware product. 
	
	======================================================================
	Change the Default Shell for Telnet
	======================================================================
	To change the default shell for the Telnet Server service
	
	1. Create a batch file that contains the full path to the shell 
	  executable you want to use.  For example, a batch file for sh.exe, 
	  Shell.bat, would contain the single line C:\SFU\Shell\sh.exe.
	
	2. Using the tlntadmn tool, set the DefaultShell registry setting to the
	  full path to the batch file. For the example, the DefaultShell 
	  registry entry would contain C:\SFU\Shell\Shell.bat.
	
	======================================================================
	Configuring UNIX Computer for Password Synchronization
	======================================================================
	A sample ssod.config file is included with the product. It is located 
	in the \common\unix directory on the distribution CD. Please refer to 
	this file when configuring a UNIX computer for password synchronization.
	
	The ssod.config file contains the shared secret, which is a plain-text 
	string used to encrypt the username/password sent from Windows NT to 
	UNIX. File/directory permissions for this file should be set so that 
	only privileged users can read it.  We suggest file ownership by root, 
	with read-only access by root such as -r--------, or 0400.
	
	The ssod daemon should also be given file permissions so that only 
	privileged users can access it.  We suggest file ownership by root, 
	permissions of -rwx------, or 0700.
	
	For information about UNIX platforms supported by Password 
	Synchronization, go to www.microsoft.com/unix/sfu.  
	
	======================================================================
	Setting NFS Share Permissions
	======================================================================
	If the NFS Share Permissions are set to read/write or read only and if 
	Allow Anonymous UID has been turned off, root cannot mount. If the NFS 
	Share Permissions are set to root, root can mount.
	
	======================================================================
	Using ln.exe
	======================================================================
	Ln.exe creates hard links to files. Hard links are pointers to files and
	are indistinguishable from the original directory entry. Any changes to 
	a file are effective regardless of the name used to refer to the file 
	(the original name or the link name). Hard links cannot span file 
	systems or drives and are not currently supported within NFS mounts or 
	from NTFS to the mount.
	
	Ln.exe does not create links over NFS. Using Ln.exe, you can create 
	links on UNIX clients that reference a Server for NFS, but you cannot 
	use Client for NFS to create links on a UNIX computer. If you create a 
	link on the UNIX host, Client for NFS uses the link correctly.
	
	Symbolic links are indirect pointers that contain the name of the file 
	to which they are linked. Symbolic links can span file systems and may 
	refer to directories. Symbolic links are not implemented in this version
	of Ln.exe.
	
	======================================================================
	Viewing Help for UNIX Shell Commands
	======================================================================
	To view help for shell commands, type -? after the command. 
	
	======================================================================
	Viewing Shared Directories
	======================================================================
	To view shared directories on a computer running Server for NFS, in 
	Start/Run, type net view /network:nfs \\server. 
	
	======================================================================
	PCNFSD Printing Capability
	======================================================================
	The PCNFSD printing capability is not supported in version 1.0 of 
	Services for Unix, and it is scheduled to be removed from the product 
	in version 2.0.  However, client authentication via PCNFSD is fully 
	supported in version 1.0. 
	
	======================================================================
	Refreshing Status of NFS Mounted Share in Windows NT Explorer
	======================================================================
	In Windows NT Explorer, the status of an NFS mounted share cannot be 
	refreshed if the share was mounted using a UNC path in the Start\Run 
	dialogue.  For example, if you use Start\Run to mount 
	\\Servername\NFSsharepath and then select View\Refresh in 
	Windows NT Explorer window, the error message, "\\Server is not 
	accessible. The network name cannot be found" appears. 
	
	The suggested workaround is to map the NFS UNC path to a drive letter 
	and then refresh it's display.   Consult the Microsoft Knowledge Base 
	for current information about this problem. 
	
	======================================================================
	Setting Telnet Server to use Only NTLM Authentication
	======================================================================
	The Telnet Server can be set to use only NTLM authentication.  This will
	provide increased security during Telnet authentication, and it will 
	prevent telnet user credentials from being passed as clear text on your 
	network. With this setting, only Telnet clients that support NTLM 
	authentication will be able to connect to the Telnet server. After you 
	make this change, you will be able to Telnet only by using NTLM 
	(NT Domain) credentials. You won't have to enter the username/password; 
	logon will happen automatically.
	
	To set the Telnet Server to use only NTLM authentication
	
	1. In Start/Run, type tlntadmn and click OK.
	
	2. Choose Display/change registry settings.
	
	3. Choose NTLM.
	
	4. Change the NTLM value to 2.
	
	5. Restart the Telnet Server.
	
	======================================================================
	Disabling NFS Version 3 Support to Avoid Loss of Files
	======================================================================
	If you use Microsoft Windows NT Services for UNIX with an operating 
	system that uses NFS Version 2 (such as IBM OS, MVS, OS/2, or AIX), 
	files can be deleted if NFS Version 3 support is turned on on the 
	Server for NFS. 
	
	To disable NFS Version 3 support, open the Server for NFS Configuration 
	dialog box, click the Server Options tab, and clear the checkmark in the
	NFS Version 3 Support checkbox. Click OK to close the dialog box.
	
	Additional query words:
	
	======================================================================
	Keywords          :  
	Technology        : kbWinNTsearch kbWinNTServicesUnix
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	

{% endraw %}
