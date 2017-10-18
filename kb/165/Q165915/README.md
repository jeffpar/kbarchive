---
layout: page
title: "Q165915: Explanation of Jet Database for Windows NT 4.0"
permalink: kb/165/Q165915/
---

## Q165915: Explanation of Jet Database for Windows NT 4.0

	Article: Q165915
	Product(s): Microsoft Windows NT
	Version(s): WinNT:4.0
	Operating System(s): 
	Keyword(s): kbinfo kbArtTypeINF
	Last Modified: 09-AUG-2001
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server version 4.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	Windows Internet Name Service (WINS) produces J<n>.log files in the
	%SystemRoot%\System32\Wins folder to increase the speed and efficiency of
	storing the WINS data. This article discusses these Jet files and their purpose.
	
	MORE INFORMATION
	================
	
	J<n>.log Files
	--------------
	
	To increase speed and efficiency of data storage, the Jet database writes current
	transactions to log files rather than to the database directly. Therefore, the
	most current view of the data will be the database plus any transactions in the
	log file(s). These files are also used for recovery if the WINS service is
	stopped abruptly or in an unexpected manner. If the service is stopped in an
	unexpected manner, the log files will automatically be used to re-create the
	correct state of the WINS database.
	
	Log files will always be a certain size; however, they can grow quickly in number
	on a very busy WINS Server. It is inevitable that WINS will write more
	transactions to a log than the size of the log can accommodate. When a log file
	becomes filled, it is renamed to indicate that it is an older log and not in
	use. A new transaction log is created with the J<n>.log filename, where
	<n> is a decimal number such as J50.log. The naming format of the previous
	log file will be JetXXXXX.log, where each X denotes a hexadecimal number from 0
	to f. Previous log files are maintained in the same folder as the current log
	files.
	
	The log files are processed (all log entries written to the database) and deleted
	when a successful backup occurs or when the WINS server is shut down gracefully.
	Therefore, if many J<n>.log files have accumulated, frequent backups
	should be scheduled to maintain the logs.
	
	After the entries have been processed, it is possible to manually delete the log
	files; however, this will prevent a successful recovery of the database if it
	should be needed. Because of this, it is important to ensure that the log files
	are not manually deleted or removed from the system until a backup has been
	performed.
	
	J<n>.chk Files
	--------------
	
	Jet maintains a checkpoint file, J<n>.chk, that indicates the location
	where the last information was successfully written from the transaction logs to
	the database. It is also used for recovery purposes; that is, the checkpoint
	file indicates where the recovery or replaying of data should begin. This
	checkpoint file is updated every time data is written to the database file
	(Wins.mdb).
	
	Res1.log and Res2.log Files
	---------------------------
	
	Reserved logs (Res1.log and Res2.log) are kept for emergency purposes. More
	specifically, they are used in the event that the server runs out of disk space.
	If a server attempts to create another transaction log file and there is
	insufficient disk space, the server will flush any outstanding transactions into
	these reserved log files. The service will then shut down and log an event to
	the Event Viewer.
	======================================================================
	Keywords          : kbinfo kbArtTypeINF 
	Technology        : kbWinNTsearch kbWinNT400search kbWinNTSsearch kbWinNTS400search kbWinNTS400
	Version           : WinNT:4.0
	Issue type        : kbinfo
	
	=============================================================================
	
