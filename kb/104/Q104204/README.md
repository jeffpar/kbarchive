---
layout: page
title: "Q104204: Troubleshooting Directory Replicator Problems"
permalink: kb/104/Q104204/
---

## Q104204: Troubleshooting Directory Replicator Problems

	Article: Q104204
	Product(s): Microsoft Windows NT
	Version(s): 3.1 3.5 3.51 4.0
	Operating System(s): 
	Keyword(s): kbnetwork
	Last Modified: 08-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 3.1 
	- Microsoft Windows NT Workstation version 3.1 
	- Microsoft Windows NT Advanced Server, version 3.1 
	- Microsoft Windows NT Workstation versions 3.5, 3.51, 4.0 
	- Microsoft Windows NT Server versions 3.5, 3.51, 4.0 
	-------------------------------------------------------------------------------
	
	If you experience problems during directory replication, the following
	list of troubleshooting steps may be helpful.
	
	NOTE: Some steps only require that you note information for use in
	subsequent steps.
	
	1. What operating system is running on the import computer? (Windows NT, Windows
	  NT Advanced Server, OS/2, UNIX)
	
	2. Is there anything interesting in the error log in the import computer? The
	  applications log has entries for the replicator service and often contains
	  useful information. Look at the logs on both the import and export computers.
	
	3. What file systems are installed in the partitions pointed to by the import
	  and export paths?
	
	4. How many import computers exhibit this behavior?
	
	5. What time zones are the import and export computers running in?
	
	6. Make sure the import computer has Backup Operator permissions.
	
	  a. You must have at least change permissions for the IMPORT AND IMPORT\SCRIPTS
	  directories.
	
	  b. The Backup Operaters Group must have at least "Backup Files and
	  Directories" and "Restore Files and Directories" rights.
	
	  If these permissions are not set up, errors 5, 1300, and 1307 will show up in
	  the event log. NOTE: With Windows NT 3.5 and 3.51, incorrect permissions
	  result in error 3216, system error 2116.
	
	7. Are the import and export computers in different domains? If so, are the
	  password and user name the same in both domains? Do the domains trust each
	  other?
	
	8. Are alerts being received by administrative accounts? (Has the alerter
	  service been started?)
	
	9. Are there any extended attributes in the files or directories being
	  replicated?
	
	10. If the source directory is on an NTFS partition, are there any alternate
	  data streams in the files or directories being replicated?
	
	11. If the source or destination directories are on an NTFS partition, look at
	  the access control lists (ACLs) on the import and export trees with File
	  Manager. Does the Replicator local group have at least CHANGE privileges to
	  these directories?
	
	12. Is it possible that an account has a file open (on import or export) all the
	  time? This would show up as a sharing violation in the event log (error 32).
	
	13. Is there an REPL$ share on the export computer? (The share is created as a
	  side effect of the Directory Replicating dialog box on the export computer.
	  This dialog box also sets an ACL for the REPL$ share. Using the NET command
	  or any other means to create the REPL$ share is likely to cause problems.)
	
	14. If you run the NET START command on the export and import computers, do both
	  computers show "Directory Replicator" (or equivalent) in the list?
	
	15. If you are exporting or importing from an NTFS directory, does either tree
	  have filenames that differ only in case? Which file gets replicated is not
	  predictable. It is possible that the export computer will choose one file
	  and the import computer will choose another. This results in the replication
	  being out of sync.
	
	16. If the export computer is running OS/2 or UNIX and the import computer is
	  running Windows NT, is the export computer's local time within half of an
	  hour of the import computer's time? If not, the Windows NT network
	  redirector will "bias" the times. This can cause everything to be copied
	  again and again. Replication may never occur.
	
	17. Some versions of the OS/2 importer leave the archive bit set on all files
	  imported, whether or not it was set on the export side. This too could
	  result in continuous copying. One workaround is to set the archive bit on
	  all files on the export computer. (Windows NT to Windows NT replication
	  correctly clones the archive bit.)
	
	18. Some LAN Manager 2.1a import computers do not set their status file to
	  OK.RP$. The cause is currently unknown, but there are few side effects.
	  Files will not be recopied each pass but a file comparison will occur.
	  Except for the status file state, the files are correctly replicated. This
	  behavior does not occur on LAN Manager 2.2 importers.
	
	19. Some versions of LAN Manager for OS/2 and UNIX allow hard disk files with
	  reserved names, such as LPT1 or COM1. This can cause problems and should be
	  avoided. The Windows NT replicator currently lets these filenames exist.
	
	20. There is a design limitation of OS/2 LAN Manager that you should be aware of
	  if you are using it to replicate files. OS/2 LAN Manager only allows one set
	  of credentials to be in use at a time. (The credentials consist of the user
	  name and password.) If someone is interactively logged on to one user
	  identification (ID) and the replicator is trying to use a different user ID,
	  then the replicator runs into that limitation. Replication will be delayed
	  until the interactive user logs off. On the other hand, if the interactive
	  user and the replicator user have the same user ID, then replication is
	  possible, depending on the value of the TryUser value in the LANMAN.INI
	  file.
	
	21. The OS/2 and UNIX LAN Manager importers are generally designed with a limit
	  of 1000 files per directory. You should be aware that the "." and ".."
	  directory entries use two of those 1000 entries. Also, some versions may
	  have an off-by-one error that causes repeated file copies with exactly 1000
	  entries. This gives a practical limit of 997 files for those importers. The
	  Windows NT importer does not have these limitations.
	
	22. Are there some files being replicated from an HPFS partition (written by
	  OS/2) to a Windows NT server? Do these files have extended attributes (EAs)?
	  There may be problems with the EAs. OS/2 might have written the EAs in
	  discontiguous parts of the disk; Windows NT does not support this. The
	  directory replicator includes the EA sizes in its checksums, and they may be
	  wrong in this case. The replication may stay out of sync permanently. You
	  can use Windows NT to rewrite the same EA values to a single contiguous
	  area, if you know the original EA values. Note that accessing an HPFS volume
	  over the network while OS/2 is directly reading or writing the volume will
	  work correctly.
	
	23. If the computers are across a router, add their machine name to the Import
	  or Export "To List" in Control Panel (choose Server and then choose
	  Replication). This forces name resolution across the router and should
	  synchronize the computers with the domain.
	
	Additional query words: prodnt
	
	======================================================================
	Keywords          : kbnetwork 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTW400 kbWinNTW400search kbWinNT351search kbWinNT350search kbWinNT400search kbWinNTW350 kbWinNTW350search kbWinNTW351search kbWinNTW351 kbWinNTW310 kbWinNTSsearch kbWinNTS400search kbWinNTS400 kbWinNTS351 kbWinNTS350 kbWinNTS310 kbWinNTAdvSerSearch kbWinNTAdvServ310 kbWinNTS351search kbWinNTS350search kbWinNTS310search kbWinNT310Search kbWinNTW310Search
	Version           : 3.1 3.5 3.51 4.0
	
	=============================================================================
	
