---
layout: page
title: "Q97875: Support for Locking at Byte, Field, Record and File Level"
permalink: kb/097/Q97875/
---

## Q97875: Support for Locking at Byte, Field, Record and File Level

	Article: Q97875
	Product(s): Microsoft LAN Manager
	Version(s): 
	Operating System(s): 
	Keyword(s): 
	Last Modified: 30-JUL-2001
	
	SUMMARY
	=======
	
	LAN Manager can support locking at byte, field, record, and file levels by
	requesting byte-range locking via the [core] Lock_Byte_Range, Unlock_Byte_Range,
	[LM1.0+] Locking_and_X, Lock_and_Read, and Write_and_Unlock Server Message
	Blocks (SMBs).
	
	MORE INFORMATION
	================
	
	Applications can use APIs such as the C run time "locking" routine to specify
	the:
	
	- Handle of the file in which to lock/unlock a range of bytes
	
	- Locking mode (lock, unlock, etc.)
	
	- Number of bytes to lock
	
	The lock is applied to the indicated number of bytes beginning at the current
	seek pointer for the specified file.
	
	If the specified handle represents a remote file (on the server), the operating
	system passes the request to the redirector. The redirector prepares an SMB and
	sends it to the server. In the case of the Lock_Byte_Range SMB, for example, the
	SMB specifies:
	
	- A file identifier known to the server (FID)
	
	- The number of bytes to lock
	
	- The byte offset within the specified file to begin the lock
	
	The server receives the [Lock_Byte_Range] SMB request, completes the lock if
	there are no conflicts with pre-existing locks, and records the fact that the
	specified bytes are locked.
	
	When a second application tries to lock, read, or write bytes within the locked
	range, the server returns an error.
	
	Note: The older Lock_Byte_Range SMB allowed only "lock out all access," but the
	newer Locking_and_X SMB allows designation of "lock out all access" or "read OK
	while locked." However, the only APIs that allow the programmer to make this
	differentiation when requesting a lock are OS/2 1.2+ "DosFileIO" and OS/2 2.0
	"DosFileLock." This feature is not currently supported in the NT "Lockfile"
	function, or in any of the standard Microsoft C run time routines.
	
	The core SMB specification document calls its locking SMBs by two names. In the
	back of the document (where SMBs are listed with their hex codes) it calls them
	"Lock_Byte_Range" and "Unlock_Byte_Range," while in the body of the document
	(where SMBs are described) it calls them "Lock_Record" and "Unlock_Record." The
	word "record" is somewhat misleading. It is indeed a byte range lock (you can
	lock a single byte), although many database/accounting applications use byte
	range locking to lock a range of bytes that the application itself knows to be a
	single significant record.
	
	Applications define "record" differently. For example, an accounting application
	requires a certain number of bytes to make up a "customer" record (x bytes for
	the Name field, x bytes for the Address field, and so on). You can't tell the
	server to "lock record 13 of the CUSTOMER.DBF file" because the server has no
	way of knowing how many bytes are in one of this application's records. Instead,
	the application calculates the byte range within the CUSTOMER.DBF file that is
	occupied by what it refers to as "record number 13," then uses the locking API
	to request that this specific byte range be locked. The server sees that a byte
	range just became locked; the application sees that record 13 just became
	locked.
	
	If the application wants to lock just the "Address" field within record 13 of the
	customer database, it calculates the range of bytes that are occupied by the
	address field of record 13, then issues the byte range lock request.
	
	In summary, LAN Manager supports locking at byte, field, record, and file
	levels.
	
	Reference(s):
	
	Microsoft C "Run-Time Library Reference"
	
	Additional query words: 2.00 2.10 2.10a 2.20
	
	======================================================================
	Keywords          :  
	
	=============================================================================
	
