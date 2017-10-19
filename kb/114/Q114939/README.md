---
layout: page
title: "Q114939: WD97: Novell NetWare Network Privileges Required to Run Word"
permalink: /kb/114/Q114939/
---

## Q114939: WD97: Novell NetWare Network Privileges Required to Run Word

	Article: Q114939
	Product(s): Word 97 for Windows
	Version(s): 
	Operating System(s): 
	Keyword(s): kbdta word8 word97kbfaq
	Last Modified: 21-MAR-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Word 97 for Windows 
	-------------------------------------------------------------------------------
	
	
	SUMMARY
	=======
	
	This article lists which network privileges you need to perform specific Word
	for Windows operations over a Novell network. The article includes the following
	sections:
	
	- Description of File System Directory and File Rights
	
	- Novell Privileges Required to Only Read Documents
	
	- Novell Privileges Required to Create or Modify Documents
	
	- Symptoms of Missing Novell Privileges
	
	- Why Novell Features File Scan as Well as Create Privileges
	
	MORE INFORMATION
	================
	
	Description of File System Directory and File Rights
	----------------------------------------------------
	
	File system security is basically the same for both Novell NetWare 3.x and Novell
	NetWare 4.x. A few new file attributes were added to Novell NetWare 4.x to
	accommodate data migration and some file compression features.
	
	Directory rights - control general access to a directory, its files, and its
	subdirectories. When granted at the directory level, the rights apply to all the
	files and subdirectories in that directory unless the rights are redefined at
	the file or subdirectory level.
	
	File rights - control access to specific files in a directory. They are used to
	redefine the rights that users inherit from directory rights.
	
	There are eight rights that can be granted at either the directory or file level.
	The following is a list of Novell file system rights.
	
	Novell NetWare Right  Description
	
	Supervisor            Grants all rights to the directory, its files, and
	                        subdirectories. The Supervisor file right can't
	                        be blocked with an IRF (Inherited Rights Filter).
	                        Users with this right can grant other users
	                        rights to the directory, its files, and
	                        subdirectories. Users who have this right can
	                        also grant other users any rights to the file and
	                        can change the file's Inherited Rights Filter.
	
	Read                  Grants the right to open files in the directory and
	                        read the contents or run the program.
	
	Create                Grants the right to create a file and to salvage a
	                        file after it has been deleted.
	
	Write                 Grants the right to open and write to an existing
	                        file.
	
	Erase                 Grants the right to erase (delete) the file.
	
	Modify                Grants the right to change the attributes and name
	                        of the file, but does not grant the right to
	                        change its contents.
	
	File Scan             Grants the right to see the file with the DIR or
	                        NDIR directory command, including the directory
	                        structure from that file to the root directory.
	
	Access Control        Grants the right to change the trustee assignments
	                        and the Inherited Rights Filter of the file.
	
	If you make a trustee assignment in a directory, the trustee has access to the
	directory, its files, and its subdirectories (unless the rights are redefined at
	the file or subdirectory level).
	
	When you make a trustee directory assignment, the default rights (Read and File
	Scan) allow a trustee to read the files in the directory and to see the
	subdirectories and files in the directory. Any trustee assignment, whether for a
	directory or a file, also includes the right to see the path leading from the
	root to that directory or file. A new assignment of trustee rights at the file
	level can revoke rights assigned at the directory level or allow additional
	rights.
	
	Novell Privileges Required to Only Read Documents
	-------------------------------------------------
	
	  READ, FILE SCAN
	
	Below is a list of directories where users need only Read and File Scan
	privileges to run Word (they only need to be able to read from these
	directories):
	
	- Server location of Word program directory tree (Administrative installation)
	
	- Server location of shared Microsoft applications (MSAPPS) directory tree
	  (Administrative installation)
	
	- Windows program directory, if running shared Windows
	
	- Any server directories where you store graphics or other source files for
	  links that you do not want users to be able to modify in Word.
	
	NOTE: In addition, you need to apply Read-Only and Shareable Flags to all the
	files in these locations. Usually, the Novell network administrator sets this
	sequence of privileges and attributes after performing the server installation
	of Windows or an application.
	
	Novell Privileges Required to Create or Modify Documents
	--------------------------------------------------------
	
	  READ, WRITE, FILE SCAN, CREATE, ERASE, MODIFY (all rights except ACCESS
	  CONTROL and SUPERVISOR)
	
	  IMPORTANT: These user rights apply to the directory that contains the files
	  you are working with. Novell NetWare also allows for assigning users file
	  level rights. Make sure the FILE SCAN right is also assigned at the file
	  level. This is especially important when users with Trustee rights are
	  working with documents within the same directory.
	
	  For example: If one user opens a document, Word creates a temporary file with
	  a name similar to "~wrd0000.tmp". When a different user with Trustee rights
	  opens a different document, their session of Word may also create a temporary
	  file with the same file name. This may occur when the Trustee does not have
	  the file level right of FILE SCAN assigned. When the FILE SCAN right is
	  missing, Word cannot "see" the other temporary files that may exist in the
	  directory.
	
	  NOTE: NetWare version 2.x also uses OPEN and uses DELETE and SEARCH instead of
	  ERASE and SEARCH, respectively.
	
	The following is a list of directories where users need these privileges to run
	Word:
	
	- The workstation's Word program directory tree, if it is located on the
	  server.
	
	- Temporary directory, if it is located on the server.
	
	- Any server directories where the user stores documents.
	
	- Any server directories where source files for links are located that the user
	  needs to modify (for example, Microsoft Excel worksheets or charts).
	
	NOTE: The files in these locations usually have no Flags assigned, which means
	the user has complete access to them.
	
	Symptoms of Missing Novell Privileges
	-------------------------------------
	
	File Scan          The user cannot see any files in the directory, so
	                  the directory appears to be empty.
	
	Erase              The user cannot delete files, which frequently
	                  results in a large number of temporary (.TMP) files.
	
	Modify             The user cannot rename files. When the user does not
	                  have Modify privileges, Word cannot rename .TMP
	                  files during a save operation. When Word saves, it
	                  deletes the previously saved version of the document
	                  and then renames the current .TMP file. Without
	                  Modify rights, Word deletes the document and then
	                  cannot rename the .TMP file, so an error occurs and
	                  the document appears to be lost (you can copy the
	                  .TMP file to a directory in which the user has
	                  appropriate privileges and then rename it).
	
	Why Novell Features File Scan as Well as Create Privileges
	----------------------------------------------------------
	
	If you have Create privileges but not File Scan privileges, you can create files
	or copy them to a directory, but you cannot view the directory. This means that,
	under Novell, you can create a "drop directory" where you can collect files
	(such as reports or logs) from many users that cannot be read by those same
	users.
	
	If you have Create privileges but not File Scan privileges in a directory where
	you want to create Word documents, a large number of .TMP files quickly
	accumulate.
	
	Additional query words: novell extra rights privilege permissions privileges permission mspress wrk install filescan word8 word97 setup exe
	
	======================================================================
	Keywords          : kbdta word8 word97 kbfaq
	Technology        : kbWordSearch kbWord97 kbWord97Search kbZNotKeyword2
	Version           : :
	
	=============================================================================
	
