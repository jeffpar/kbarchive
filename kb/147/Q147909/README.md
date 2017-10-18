---
layout: page
title: "Q147909: Troubleshooting MacVolume Creation Errors"
permalink: kb/147/Q147909/
---

## Q147909: Troubleshooting MacVolume Creation Errors

	Article: Q147909
	Product(s): Microsoft Windows NT
	Version(s): 2000,3.51,4.0
	Operating System(s): 
	Keyword(s): kbinterop
	Last Modified: 06-AUG-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server versions 3.51, 4.0 
	- Microsoft Windows 2000 Server 
	-------------------------------------------------------------------------------
	
	SYMPTOMS
	========
	
	When you use Services for Macintosh (SFM) for Windows NT, there may be
	occasional issues creating or re-creating a MacVolume. The following error
	message may appear when you create the volume:
	
	  The Device attached to the system is not functioning
	
	In the event log, the following error message is displayed:
	
	  Event ID: 12035
	  Description: Volume information for <volume name> could not be loaded.
	  Setting defaults.
	
	RESOLUTION
	==========
	
	The following methods should be tried individually and in sequential order.
	Before each step, stop Services for Macintosh (SFM) in the Services tool in
	Control Panel. Before you continue with the next step, restart SFM and test for
	success by attempting to re-create the volume on the preferred directory.
	
	Method 1
	--------
	
	Run Chkdsk.exe with the /f and /r command-line switches on the partition that is
	generating the error message. Running Chkdsk.exe usually requires restarting the
	server. If the volume is large in size, it may take several minutes to several
	hours to complete and the server may not be available during this time. If time
	is a concern and you have a large volume, skip this method and continue to
	method 2. At some point when time permits, run Chkdsk.exe on the server.
	
	Method 2
	--------
	
	Create a temporary Macintosh volume on a new partition. Copy all files and
	folders from the original Macintosh volume into the temporary volume on the new
	partition.
	
	NOTE: Existing Macintosh NTFS file system (NTFS) permissions are not retained.
	You can use Scopy.exe, which can be found in the Windows NT Resource Kit, to
	retain all file and folder permissions if necessary.
	
	Remove the original Macintosh volume from MacFile. Delete the original folder,
	and then re-create the volume using the same volume name. If this is successful,
	move all files and folders from the temporary volume back into the re-created
	volume.
	
	Method 3
	--------
	
	Create a temporary Macintosh volume. Move all files and folders from the original
	Macintosh volume into the temporary volume on the same drive.
	
	NOTE: This ensures that permissions are retained.
	
	Remove the original Macintosh volume from MacFile, delete the original folder,
	and then re-create the volume using the same volume name. If this is successful,
	move all files and folders from the temporary volume back into the re-created
	volume.
	
	Method 4
	--------
	
	Remove the volume in question from Macfile, and then delete the Icon file and
	Network trash folder. These files (Hidden/System) exist in the root of the
	Macintosh volume (folder).
	
	Method 5
	--------
	
	If the issue exists in a volume that is part of a folder (for example,
	D:\Public), type the following command at a command prompt:
	
	  dir > d:\public:afp_idindex
	
	If you are rebuilding a root drive share such as C:\ or D:\, type the following
	command at a command prompt:
	
	  dir > d:\:afp_idindex
	
	NOTE: This command intentionally damages the index of the Macintosh volume. After
	SFM is stopped and restarted, the damage forces Windows NT to rebuild the index
	on that volume immediately. If an "access denied" error message occurs, the
	volume may be in use by opened files or the folder is being shared for personal
	computer access. Disable all programs and file sharing to prevent this error
	message.
	
	After SFM is restarted and the index is complete, an event is logged in Event
	Viewer. If the volume is large in size, it may take several minutes before all
	volumes and files are visible by the Macintosh client. Avoid stopping the SFM
	service at this time.
	
	The following error will appear when you corrupt the volume index:
	
	  Event ID: 12042
	  Source: MacFile
	  Description: Internal server information for file "\<volume
	  name>:AFP_AfpInfo" was corrupted.
	  Setting default information.
	
	Method 6
	--------
	
	Use Disk Administrator to change the drive letter of the partition exhibiting the
	problem. For example, if drive D had the original Macintosh volume, change it to
	drive E (as long as E is not being used by another device). Restart the computer
	running Windows NT and attempt to create the volume. If this is successful, you
	can use Disk Administrator to change back to the original drive letter.
	
	NOTE: This procedure damages the NTFS data stream and forces MacFile to
	regenerate it. This step is only necessary if you are sharing the root of the
	drive.
	
	Method 7
	--------
	
	Remove all Macintosh volumes from MacFile. Remove SFM by using the Network tool
	in Control Panel. Do not restart the computer. Delete the Icon file and the
	Network trash folder from the root of the Macintosh volume. Restart the
	computer. Reinstall SFM and apply the necessary service packs.
	
	
	MORE INFORMATION
	================
	
	SFM creates an in-memory index for each Macintosh volume to optimize folder and
	file access for Macintosh clients. Along with the appropriate disk structures,
	the index is updated for certain events, such as creation or deletion of folders
	and files, and for all permission changes. The index, which is stored on disk in
	the volume header, is read when SFM is started and written right after startup
	and again when SFM is shutdown. Attribute changes, such as folder permissions
	made by processes outside of SFM, to Macintosh volumes may not be correctly
	reflected until SFM is stopped and restarted.
	
	For additional information about an update to SFM and index creation, click the
	article number below to view the article in the Microsoft Knowledge Base:
	
	  Q185722 SFM Rebuilds Indexes upon Restarting of Windows NT
	
	Additional query words: mac tshoot resource fork corrupt corrupted
	
	======================================================================
	Keywords          : kbinterop 
	Technology        : kbWinNTsearch kbWinNT351search kbWinNT400search kbwin2000Serv kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbwin2000ServSearch kbwin2000Search kbWinNTS351search
	Version           : :2000,3.51,4.0
	Issue type        : kbprb
	
	=============================================================================
	
