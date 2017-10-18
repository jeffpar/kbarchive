---
layout: page
title: "Q77926: PC DB: Description of Mail Database Subdirectories"
permalink: kb/077/Q77926/
---

## Q77926: PC DB: Description of Mail Database Subdirectories

	Article: Q77926
	Product(s): Microsoft Mail For PC Networks
	Version(s): WINDOWS:2.1x,3.0,3.2
	Operating System(s): 
	Keyword(s): 
	Last Modified: 18-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail for PC Networks, versions 2.1x, 3.0, 3.2 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article provides descriptions of each of the Mail database subdirectories.
	It also lists the versions of Mail in which that subdirectory exists.
	
	If a customer is experiencing a problem, the Mail administrator should NEVER
	modify file sizes without first consulting with Microsoft Product Support
	Services.
	
	The following is a brief description of the database subdirectories (where
	appropriate, default file sizes are listed):
	
	Subdir    Description                                            Version(s)
	---------------------------------------------------------------------------
	
	ATT       This subdirectory has 16 subdirectories that contain         All
	         any attachment files that are used in the Mail system.
	         Each of the 16 subdirectories contain encrypted
	         attachment files. Files that have the .ATT extension are
	         files that have been attached to a particular mail item.
	         The reference to an attachment file is in the mail (.MAI)
	         file itself. A single mail file can reference several
	         attachments, but a single attachment file cannot be
	         referenced more than once.
	
	CAL       This subdirectory stores the online calendar files when      3.0
	         Schedule+ is installed. The files are stored according       3.2
	         to a hexadecimal (hexid) number that is assigned when
	         the Schedule+ user first logs on.
	
	         NOTE: The hexid number is NOT the same number as the
	         one used by the Mail system!
	
	FOLDERS   This subdirectory is used by the folders subsystem.          All
	         All folder files are stored here initially. Mail users
	         may optionally move individual private folders to local
	         storage. Individual private folders are stored in the
	         FOLDERS\LOC\<hexid> subdirectory. Group and shared
	         folders are stored in the FOLDERS\PUB subdirectory. This
	         storage method is used by all versions of the MS-DOS
	         client, OS/2 client, and Macintosh client. It is also
	         used by the version 2.1 Windows client.
	
	         the <serialno>.IDX file in the FOLDERS subdirectory is
	         4 bytes (fixed size). Individual <nnnnnnnn>.IDX files
	         and the FOLDROOT.IDX file are (file size - 100 bytes) and
	         should be divisible by 158.
	
	GLB       The files in this directory are at the top of the            All
	         hierarchy of the database and serve a variety of
	         purposes. These files contain the core of the postoffice
	         configuration. The GLB directory also contains error
	         message and other types of files that do not contain
	         postoffice configuration information. This is also the
	         default location for modem scripts.
	
	         File Sizes
	         ----------
	
	         ACCESS.GLB should be divisible by 586.
	         ACCESS2.GLB should be divisible by 69.
	         ACCESS3.GLB should be divisible by 512.
	
	         The result for the three access files should be the same
	         number.
	
	         CONTROL.GLB    8 bytes fixed size
	         FLAG.GLB       2 bytes fixed size
	         GLOBAL.GLB     512 bytes fixed size
	         GROUP.GLB      (file size - 4 bytes)
	                        Should be divisible by 51
	         GRPMEM.GLB     (file size - 4 bytes)
	                        Should be divisible by 128
	         MASTER.GLB     176 bytes fixed size
	         MODEM.GLB      64 bytes fixed size
	         NETPO.GLB      (file size - 4 bytes)
	                        Should be divisible by 43
	         NETWORK.GLB    Should be divisible by 122
	         PROCESS.GLB    (file size - 512 bytes)
	                        Should be divisible by 197
	         REQCONF.GLB    512 bytes fixed size
	         SERVER.GLB     Should be divisible by 181
	         SVRCONF.GLB    On directory synchronization server only
	                        1024 bytes + (1024 bytes * total number of POs)
	         TID.GLB        4 bytes fixed size
	
	GRP       This subdirectory contains the group pointer files for       All
	         public and private distribution lists.
	
	         The file size should be divisible by 8.
	
	HLP       This subdirectory contains the Help files for the            All
	         individual Mail programs. Help is opened when the F1
	         key is pressed.
	
	INF       This subdirectory contains the information files that        All
	         correspond to the postoffice-defined template files.
	         The INF file contains template ("about") information for
	         every user defined in a .USR file. The .USR file is the
	         user list for external Mail for PC Networks postoffices
	         and has the same filename prefix as the postoffice's MBG
	         file. The .INF file also has this same filename prefix.
	         There may also be an ADMIN.INF file if the local postoffice
	         administrator has defined a custom template. External
	         postoffice .INF files only exist if another postoffice
	         administrator exports templates. The record format of the
	         .INF file is defined by the associated .TPL file. There is
	         always an associated .TPL file with every .INF file.
	
	INI       This subdirectory is the default location for .INI files     3.2
	         used by the system; notably, by the Dispatch and External
	         Mail programs.
	
	KEY       This subdirectory contains the index files that are used     All
	         to determine the location of the mail header in the
	         individual user's mailbag (.MBG) file. There will always
	         be a corresponding .MBG file in the MBG subdirectory. The
	         .KEY file contains information such as the number of new
	         mail items since the user last logged in, the amount of
	         unread mail in the user's mailbag, and a bitmap of deleted
	         records in the corresponding .MBG file. The bitmap is used
	         so that when mail is sent to a user, a vacant record
	         position in the user's .MBG file can be found directly by
	         examining the bitmap rather than having to sequentially
	         process the .MBG file looking for deleted records.
	
	         The file size should be 560 bytes (fixed size).
	
	LOG       This subdirectory is the default location for the log        All
	         files created by the External Mail, Dispatch, and other
	         gateway programs. The creation of these files is
	         determined by the parameters that are specified when the
	         various programs are started.
	
	MAI       This subdirectory has 16 subdirectories that contain         All
	         any message files that are used in the Mail system. Each
	         of the 16 subdirectories contains encrypted message files.
	
	MBG       This subdirectory contains the individual mailbag files      All
	         that are used to store the Mail headers for an individual
	         user. It is basically the file format of the first screen
	         a user sees when he or she starts up the MS-DOS Mail or
	         Monitor program. There will always be a corresponding key
	         index (.KEY) file in the KEY subdirectory.
	
	         The records contained in the mailbag (.MBG) file serve two
	         purposes:
	
	          - A non-deleted record acts as an index pointer to a mail
	            item. Thus, a single mail file can be pointed to by many
	            mailbag records. Each of these mailbag records must
	            reside in separate .MBG files because two records in a
	            single mailbag can never point to the same item of mail.
	
	          - .MBG records contain summary information about the
	            particular mail item. This information is used by the
	            user agent programs to display a list of mail headers in
	            the opening display of the user's mail. The mail file
	            itself does not have to be read until the user selects
	            it for processing (for example, by reading, deleting, and
	            so forth). There is no delete flag in the .MBG record
	            structure. Deleted status is maintained in the .KEY file,
	            which has the same filename prefix as the .MBG file.
	
	         There is a single .MBG file for every local user, of the
	         format <nnnnnnnn>.MBG; there is a single .MBG file for
	         every external postoffice or gateway that is defined; and
	         there is an INQUEUE3.MBG file that is used to receive any
	         mail from external sources and an INQUEUE.MBG file that is
	         used for directory synchronization (Dir-Sync).
	
	         Mail is delivered from the INQUEUE3.MBG file to individual
	         mailbags via the Mailer process. The version 3.0 postoffice
	         contains a special mailbag: SYSTEM.MBG. Mail addressed to
	         network/postoffice/$system will be put here. This mailbag
	         is currently used for Dir-Sync mail, but in future versions
	         it may also be used for other system mail functions.
	
	         The file size should be divisible by 116.
	
	MEM       This subdirectory contains only the local members of         All
	         global groups defined at this postoffice. External
	         addresses are not part of the member list. Each record
	         represents a user mailbag number. These files are only
	         created for administrator-defined groups (that is,
	         postoffice groups) and are used for quick access by
	         Mailer for resolving groups.
	
	         The file size should be divisible by 4.
	         The maximum size should 2000 bytes.
	
	MMF       This subdirectory contains the Mail message files (.MMF)     3.0
	         used by the Windows clients in versions  3.0 and later.      3.2
	         These files are stored by user hexid number.
	
	NME       This subdirectory contains the files for the postoffice      All
	         address list (POL), the global address list (GAL),
	         gateway address lists, and the individual personal address
	         lists (PALs) used by all clients in version 2.1, and in
	         the MS-DOS, OS/2, and Macintosh clients in Mail versions
	         3.0 and later. The concept of these lists is to allow
	         dissimilar address types to reside in the same address list.
	
	         The file size should be divisible by 45.
	
	P1        This subdirectory is used by the External Mail program to    All
	         store temporary mail files during a communications or
	         postoffice-to-postoffice (PO-to-PO) delivery session.
	
	TPL       This subdirectory contains the template files used by the    All
	         local postoffice and gateways.
	
	USR       This file is the address list of users and groups for a      All
	         particular postoffice. The postoffice that this list
	         represents is an externally defined postoffice. If this
	         file exists, its prefix filename will match the external
	         postoffice's .MBG filename. This file can be created or
	         updated using the Mail Administrator program (ADMIN.EXE)
	         or it can be created or replaced by the External Mail
	         program when it receives an exported user list from this
	         postoffice.
	
	         The file size should be divisible by 53.
	
	XTN       This subdirectory contains the external postoffice           All
	         definition files. Each .XTN file contains all of the
	         postoffices that are defined at an individual network.
	
	         For each network that is defined in the NETWORK.GLB file,
	         there is an associated .XTN file. This file is a series
	         of records, where each record defines a different
	         postoffice at this network. The purpose of this file is
	         to provide routing, naming, and sign-on information for
	         external services/postoffices. Postoffice records also
	         contain connection information, statistics, and various
	         configuration options for that postoffice. Each postoffice
	         record contains a file pointer reference to its mailbag.
	         When an address list of users is created for this
	         postoffice, there will also be a .USR file and, possibly,
	         .TPL and .INF files with the same file prefix as the .MBG
	         file.
	
	         The file size should be divisible by 698.
	
	Additional query words: 2.10 2.10c 2.10d 2.10e 3.00 3.00b 3.20 3.20a
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbZNotKeyword3 kbMailPCN320 kbMailPCN300 kbMailPCN21xSearch
	Version           : WINDOWS:2.1x,3.0,3.2
	
	=============================================================================
	
