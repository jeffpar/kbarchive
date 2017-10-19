---
layout: page
title: "Q155011: INFO: Error Codes in Windows NT Part 1 of 2 (article I)"
permalink: /kb/155/Q155011/
---

## Q155011: INFO: Error Codes in Windows NT Part 1 of 2 (article I)

	Article: Q155011
	Product(s): Microsoft Windows NT
	Version(s): 
	Operating System(s): 
	Keyword(s): kberrmsg kbOPK kbSBK
	Last Modified: 13-FEB-2002
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Windows NT Server 
	- Microsoft Windows NT Workstation 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	This article lists the error codes you may encounter in Windows NT. For the
	remaining error codes, please see the following article(s) in the Microsoft
	Knowledge Base:
	
	  Q155012 Error Codes in Windows NT Part 2 of 2
	
	MORE INFORMATION
	================
	
	Code  Name                                  Description
	--------------------------------------------------------------------------
	-8    LZERROR_UNKNOWNALG                    Compression algorithm not
	                                           recognized.
	-7    LZERROR_BADVALUE                      Input parameter out of
	                                           acceptable range.
	-6    LZERROR_GLOBLOCK                      Bad global handle.
	-5    LZERROR_GLOBALLOC                     Insufficient memory for LZFile
	                                           structure.
	-4    LZERROR_WRITE                         Out of space for output file.
	-3    LZERROR_READ                          Corrupt compressed file
	                                           format.
	-2    LZERROR_BADOUTHANDLE                  Invalid output handle.
	-1    LZERROR_BADINHANDLE                   Invalid input handle.
	0L    NO_ERROR                              No error.
	0L    ERROR_SUCCESS                         The operation was successfully
	                                           completed.
	1L    ERROR_INVALID_FUNCTION                The function is incorrect.
	2L    ERROR_FILE_NOT_FOUND                  The system cannot find the
	                                           file specified.
	3L    ERROR_PATH_NOT_FOUND                  The system cannot find the
	                                           specified path.
	4L    ERROR_TOO_MANY_OPEN_FILES             The system cannot open the
	                                           file.
	5L    ERROR_ACCESS_DENIED                   Access is denied.
	6L    ERROR_INVALID_HANDLE                  The internal file identifier
	                                           is incorrect.
	7L    ERROR_ARENA_TRASHED                   The storage control blocks
	                                           were destroyed.
	8L    ERROR_NOT_ENOUGH_MEMORY               Not enough storage is
	                                           available to process this
	                                           command.
	9L    ERROR_INVALID_BLOCK                   The storage control block
	                                           address is invalid.
	10L   ERROR_BAD_ENVIRONMENT                 The environment is incorrect.
	11L   ERROR_BAD_FORMAT                      An attempt was made to load a
	                                           program with an incorrect
	                                           format.
	12L   ERROR_INVALID_ACCESS                  The access code is invalid.
	13L   ERROR_INVALID_DATA                    The data is invalid.
	14L   ERROR_OUTOFMEMORY                     Not enough storage is
	                                           available to complete this
	                                           operation.
	15L   ERROR_INVALID_DRIVE                   The system cannot find the
	                                           specified drive.
	16L   ERROR_CURRENT_DIRECTORY               The directory cannot be
	                                           removed.
	17L   ERROR_NOT_SAME_DEVICE                 The system cannot move the
	                                           file to a different disk
	                                           drive.
	18L   ERROR_NO_MORE_FILES                   There are no more files.
	19L   ERROR_WRITE_PROTECT                   The media is write protected.
	20L   ERROR_BAD_UNIT                        The system cannot find the
	                                           specified device.
	21L   ERROR_NOT_READY                       The drive is not ready.
	22L   ERROR_BAD_COMMAND                     The device does not recognize
	                                           the command.
	23L   ERROR_CRC                             Data error (cyclic redundancy
	                                           check).
	24L   ERROR_BAD_LENGTH                      The program issued a command
	                                           but the command length is
	                                           incorrect.
	25L   ERROR_SEEK                            The drive cannot locate a
	                                           specific area or track on the
	                                           disk.
	26L   ERROR_NOT_DOS_DISK                    The specified disk cannot be
	                                           accessed.
	27L   ERROR_SECTOR_NOT_FOUND                The drive cannot find the
	                                           requested sector.
	28L   ERROR_OUT_OF_PAPER                    The printer is out of paper.
	29L   ERROR_WRITE_FAULT                     The system cannot write to the
	                                           specified device.
	30L   ERROR_READ_FAULT                      The system cannot read from
	                                           the specified device.
	31L   ERROR_GEN_FAILURE                     A device attached to the
	                                           system is not functioning.
	32L   ERROR_SHARING_VIOLATION               The process cannot access the
	                                           file because it is being used
	                                           by another process.
	33L   ERROR_LOCK_VIOLATION                  The process cannot access the
	                                           file because another process
	                                           has locked a portion of the
	                                           file.
	34L   ERROR_WRONG_DISK                      The wrong disk is in the
	                                           drive. Insert %2 (Volume
	                                           Serial Number: %3) into drive
	                                           %1.
	36L   ERROR_SHARING_BUFFER_EXCEEDED         Too many files opened for
	                                           sharing.
	38L   ERROR_HANDLE_EOF                      Reached End Of File.
	39L   ERROR_HANDLE_DISK_FULL                The disk is full.
	50L   ERROR_NOT_SUPPORTED                   The network request is not
	                                           supported.
	51L   ERROR_REM_NOT_LIST                    The remote computer is not
	                                           available.
	52L   ERROR_DUP_NAME                        A duplicate name exists on the
	                                           network.
	
	53L   ERROR_BAD_NETPATH                     The network path was not
	                                           found.
	54L   ERROR_NETWORK_BUSY                    The network is busy.
	55L   ERROR_DEV_NOT_EXIST                   The specified network resource
	                                           is no longer available.
	56L   ERROR_TOO_MANY_CMDS                   The network BIOS command limit
	                                           has been reached.
	57L   ERROR_ADAP_HDW_ERR                    A network adapter hardware
	                                           error occurred.
	58L   ERROR_BAD_NET_RESP                    The specified server cannot
	                                           perform the requested
	                                           operation.
	59L   ERROR_UNEXP_NET_ERR                   An unexpected network error
	                                           occurred.
	60L   ERROR_BAD_REM_ADAP                    The remote adapter is not
	                                           compatible.
	61L   ERROR_PRINTQ_FULL                     The printer queue is full.
	62L   ERROR_NO_SPOOL_SPACE                  Space to store the file
	                                           waiting to be printed is not
	                                           available on the server.
	63L   ERROR_PRINT_CANCELLED                 File waiting to be printed was
	                                           deleted.
	64L   ERROR_NETNAME_DELETED                 The specified network name is
	                                           no longer available.
	65L   ERROR_NETWORK_ACCESS_DENIED           Network access is denied.
	66L   ERROR_BAD_DEV_TYPE                    The network resource type is
	                                           incorrect.
	67L   ERROR_BAD_NET_NAME                    The network name cannot be
	                                           found.
	68L   ERROR_TOO_MANY_NAMES                  The name limit for the local
	                                           computer network adapter card
	                                           exceeded.
	69L   ERROR_TOO_MANY_SESS                   The network BIOS session limit
	                                           exceeded.
	70L   ERROR_SHARING_PAUSED                  The remote server is paused or
	                                           is in the process of being
	                                           started.
	71L   ERROR_REQ_NOT_ACCEP                   The network request was not
	                                           accepted.
	72L   ERROR_REDIR_PAUSED                    The specified printer or disk
	                                           device has been paused.
	80L   ERROR_FILE_EXISTS                     The file exists.
	82L   ERROR_CANNOT_MAKE                     The directory or file cannot
	                                           be created.
	83L   ERROR_FAIL_I24                        Fail on INT 24.
	84L   ERROR_OUT_OF_STRUCTURES               Storage to process this
	                                           request is not available.
	85L   ERROR_ALREADY_ASSIGNED                The local device name is
	                                           already in use.
	86L   ERROR_INVALID_PASSWORD                The specified network password
	                                           is incorrect.
	87L   ERROR_INVALID_PARAMETER               The parameter is incorrect.
	88L   ERROR_NET_WRITE_FAULT                 A write fault occurred on the
	                                           network.
	89L   ERROR_NO_PROC_SLOTS                   The system cannot start
	                                           another process at this time.
	100L  ERROR_TOO_MANY_SEMAPHORES             Cannot create another system
	                                           semaphore.
	101L  ERROR_EXCL_SEM_ALREADY_OWNED          The exclusive semaphore is
	                                           owned by another process.
	102L  ERROR_SEM_IS_SET                      The semaphore is set and
	                                           cannot be closed.
	103L  ERROR_TOO_MANY_SEM_REQUESTS           The semaphore cannot be set
	                                           again.
	104L  ERROR_INVALID_AT_INTERRUPT_TIME       Cannot request exclusive
	                                           semaphores at interrupt time.
	105L  ERROR_SEM_OWNER_DIED                  The previous ownership of this
	                                           semaphore has ended.
	106L  ERROR_SEM_USER_LIMIT                  Insert the disk for drive 1.
	107L  ERROR_DISK_CHANGE                     Program stopped because
	                                           alternate disk was not
	                                           inserted.
	108L  ERROR_DRIVE_LOCKED                    The disk is in use or locked
	                                           by another process.
	109L  ERROR_BROKEN_PIPE                     The pipe was ended.
	110L  ERROR_OPEN_FAILED                     The system cannot open the
	                                           specified device or file.
	111L  ERROR_BUFFER_OVERFLOW                 The file name is too long.
	112L  ERROR_DISK_FULL                       There is not enough space on
	                                           the disk.
	113L  ERROR_NO_MORE_SEARCH_HANDLES          No more internal file
	                                           identifiers available.
	114L  ERROR_INVALID_TARGET_HANDLE           The target internal file
	                                           identifier is incorrect.
	117L  ERROR_INVALID_CATEGORY                The IOCTL call made by the
	                                           application program is
	                                           incorrect.
	118L  ERROR_INVALID_VERIFY_SWITCH           The verify-on-write switch
	                                           parameter value is incorrect.
	119L  ERROR_BAD_DRIVER_LEVEL                The system does not support
	                                           the requested command.
	120L  ERROR_CALL_NOT_IMPLEMENTED            The Application Program
	                                           Interface (API) entered will
	                                           only work in Windows/NT mode.
	121L  ERROR_SEM_TIMEOUT                     The semaphore timeout period
	                                           has expired.
	122L  ERROR_INSUFFICIENT_BUFFER             The data area passed to a
	                                           system call is too small.
	123L  ERROR_INVALID_NAME                    The file name, directory name,
	                                           or volume label is
	                                           syntactically incorrect.
	124L  ERROR_INVALID_LEVEL                   The system call level is
	                                           incorrect.
	125L  ERROR_NO_VOLUME_LABEL                 The disk has no volume label.
	126L  ERROR_MOD_NOT_FOUND                   The specified module cannot be
	                                           found.
	127L  ERROR_PROC_NOT_FOUND                  The specified procedure could
	                                           not be found.
	128L  ERROR_WAIT_NO_CHILDREN                There are no child processes
	                                           to wait for.
	129L  ERROR_CHILD_NOT_COMPLETE              The %1 application cannot be
	                                           run in Windows mode.
	130L  ERROR_DIRECT_ACCESS_HANDLE            Attempt to use a file handle
	                                           to an open disk partition for
	                                           an operation other than raw
	                                           disk I/O.
	131L  ERROR_NEGATIVE_SEEK                   An attempt was made to move
	                                           the file pointer before the
	                                           beginning of the file.
	132L  ERROR_SEEK_ON_DEVICE                  The file pointer cannot be set
	                                           on the specified device or
	                                           file.
	133L  ERROR_IS_JOIN_TARGET                  A JOIN or SUBST command cannot
	                                           be used for a drive that
	                                           contains previously joined
	                                           drives.
	134L  ERROR_IS_JOINED                       An attempt was made to use a
	                                           JOIN or SUBST command on a
	                                           drive that is already joined.
	135L  ERROR_IS_SUBSTED                      An attempt was made to use a
	                                           JOIN or SUBST command on a
	                                           drive already substituted.
	136L  ERROR_NOT_JOINED                      The system attempted to delete
	                                           the JOIN of a drive not
	                                           previously joined.
	137L  ERROR_NOT_SUBSTED                     The system attempted to delete
	                                           the substitution of a drive
	                                           not previously substituted.
	138L  ERROR_JOIN_TO_JOIN                    The system tried to join a
	                                           drive to a directory on a
	                                           joined drive.
	139L  ERROR_SUBST_TO_SUBST                  The system attempted to
	                                           substitute a drive to a
	                                           directory on a substituted
	                                           drive.
	140L  ERROR_JOIN_TO_SUBST                   The system tried to join a
	                                           drive to a directory on a
	                                           substituted drive.
	141L  ERROR_SUBST_TO_JOIN                   The system attempted to SUBST
	                                           a drive to a directory on a
	                                           joined drive.
	142L  ERROR_BUSY_DRIVE                      The system cannot perform a
	                                           JOIN or SUBST at this time.
	143L  ERROR_SAME_DRIVE                      The system cannot join or
	                                           substitute a drive to or for a
	                                           directory on the same drive.
	144L  ERROR_DIR_NOT_ROOT                    The directory is not a
	                                           subdirectory of the root
	                                           directory.
	145L  ERROR_DIR_NOT_EMPTY                   The directory is not empty.
	146L  ERROR_IS_SUBST_PATH                   The path specified is being
	                                           used in a substitute.
	147L  ERROR_IS_JOIN_PATH                    Not enough resources are
	                                           available to process this
	                                           command.
	148L  ERROR_PATH_BUSY                       The specified path cannot be
	                                           used at this time.
	149L  ERROR_IS_SUBST_TARGET                 An attempt was made to join or
	                                           substitute a drive for which a
	                                           directory on the drive is the
	                                           target of a previous
	                                           substitute.
	150L  ERROR_SYSTEM_TRACE                    System trace information not
	                                           specified in your CONFIG.SYS
	                                           file, or tracing is not
	                                           allowed.
	151L  ERROR_INVALID_EVENT_COUNT             The number of specified
	                                           semaphore events is incorrect.
	152L  ERROR_TOO_MANY_MUXWAITERS             Too many semaphores are
	                                           already set.
	153L  ERROR_INVALID_LIST_FORMAT             The list is not correct.
	154L  ERROR_LABEL_TOO_LONG                  The volume label entered
	                                           exceeds the 11 character
	                                           limit. The first 11 characters
	                                           were written to disk. Any
	                                           characters that exceeded the
	                                           11 character limit were
	                                           automatically deleted.
	155L  ERROR_TOO_MANY_TCBS                   Cannot create another thread.
	156L  ERROR_SIGNAL_REFUSED                  The recipient process has
	                                           refused the signal.
	157L  ERROR_DISCARDED                       The segment is already
	                                           discarded and cannot be
	                                           locked.
	158L  ERROR_NOT_LOCKED                      The segment is already
	                                           unlocked.
	159L  ERROR_BAD_THREADID_ADDR               The address for the thread ID
	                                           is incorrect.
	160L  ERROR_BAD_ARGUMENTS                   The argument string passed to
	                                           DosExecPgm is incorrect.
	161L  ERROR_BAD_PATHNAME                    The specified path name is
	                                           invalid.
	162L  ERROR_SIGNAL_PENDING                  A signal is already pending.
	164L  ERROR_MAX_THRDS_REACHED               No more threads can be created
	                                           in the system.
	167L  ERROR_LOCK_FAILED                     Attempt to lock a region of a
	                                           file failed.
	170L  ERROR_BUSY                            The requested resource is in
	                                           use.
	173L  ERROR_CANCEL_VIOLATION                A lock request was not
	                                           outstanding for the supplied
	                                           cancel region.
	174L  ERROR_ATOMIC_LOCKS_NOT_SUPPORTED      The file system does not
	                                           support atomic changing of the
	                                           lock type.
	180L  ERROR_INVALID_SEGMENT_NUMBER          The system detected a segment
	                                           number that is incorrect.
	182L  ERROR_INVALID_ORDINAL                 The operating system cannot
	                                           run %1.
	183L  ERROR_ALREADY_EXISTS                  Attempt to create file that
	                                           already exists.
	186L  ERROR_INVALID_FLAG_NUMBER             The flag passed is incorrect.
	187L  ERROR_SEM_NOT_FOUND                   The specified system semaphore
	                                           name was not found.
	188L  ERROR_INVALID_STARTING_CODESEG        The operating system cannot
	                                           run %1.
	189L  ERROR_INVALID_STACKSEG                The operating system cannot
	                                           run %1.
	190L  ERROR_INVALID_MODULETYPE              The operating system cannot
	                                           run %1.
	191L  ERROR_INVALID_EXE_SIGNATURE           %1 cannot be run in Windows/NT
	                                           mode.
	192L  ERROR_EXE_MARKED_INVALID              The operating system cannot
	                                           run %1.
	193L  ERROR_BAD_EXE_FORMAT                  %1 is not a valid Windows-
	                                           based application.
	194L  ERROR_ITERATED_DATA_EXCEEDS_64k       The operating system cannot
	                                           run %1.
	195L  ERROR_INVALID_MINALLOCSIZE            The operating system cannot
	                                           run %1.
	196L  ERROR_DYNLINK_FROM_INVALID_RING       The operating system cannot
	                                           run this application program.
	197L  ERROR_IOPL_NOT_ENABLED                The operating system is not
	                                           presently configured to run
	                                           this application.
	198L  ERROR_INVALID_SEGDPL                  The operating system cannot
	                                           run %1.
	199L  ERROR_AUTODATASEG_EXCEEDS_64k         The operating system cannot
	                                           run this application program.
	200L  ERROR_RING2SEG_MUST_BE_MOVABLE        The code segment cannot be
	                                           greater than or equal to 64KB.
	201L  ERROR_RELOC_CHAIN_XEEDS_SEGLIM        The operating system cannot
	                                           run %1.
	202L  ERROR_INFLOOP_IN_RELOC_CHAIN          The operating system cannot
	                                           run %1.
	203L  ERROR_ENVVAR_NOT_FOUND                The system could not find the
	                                           environment option entered.
	205L  ERROR_NO_SIGNAL_SENT                  No process in the command
	                                           subtree has a signal handler.
	206L  ERROR_FILENAME_EXCED_RANGE            The file name or extension is
	                                           too long.
	207L  ERROR_RING2_STACK_IN_USE              The ring 2 stack is in use.
	208L  ERROR_META_EXPANSION_TOO_LONG         The global filename characters
	                                           * or ? are entered
	                                           incorrectly, or too many
	                                           global filename characters are
	                                           specified.
	209L  ERROR_INVALID_SIGNAL_NUMBER           The signal being posted is
	                                           incorrect.
	210L  ERROR_THREAD_1_INACTIVE               The signal handler cannot be
	                                           set.
	212L  ERROR_LOCKED                          The segment is locked and
	                                           cannot be reallocated.
	214L  ERROR_TOO_MANY_MODULES                Too many dynamic link modules
	                                           are attached to this program
	                                           or dynamic link module.
	215L  ERROR_NESTING_NOT_ALLOWED             Can't nest calls to
	                                           LoadModule.
	230L  ERROR_BAD_PIPE                        The pipe state is invalid.
	231L  ERROR_PIPE_BUSY                       All pipe instances busy.
	232L  ERROR_NO_DATA                         Pipe close in progress.
	233L  ERROR_PIPE_NOT_CONNECTED              No process on other end of
	                                           pipe.
	234L  ERROR_MORE_DATA                       More data is available.
	240L  ERROR_VC_DISCONNECTED                 The session was canceled.
	254L  ERROR_INVALID_EA_NAME                 The specified EA name is
	                                           invalid.
	255L  ERROR_EA_LIST_INCONSISTENT            The EAs are inconsistent.
	259L  ERROR_NO_MORE_ITEMS                   No more data is available.
	266L  ERROR_CANNOT_COPY                     The Copy API cannot be used.
	267L  ERROR_DIRECTORY                       The directory name is invalid.
	275L  ERROR_EAS_DIDNT_FIT                   The EAs did not fit in the
	                                           buffer.
	276L  ERROR_EA_FILE_CORRUPT                 The EA file on the mounted
	                                           file system is damaged.
	277L  ERROR_EA_TABLE_FULL                   The EA table in the EA file on
	                                           the mounted file system is
	                                           full.
	278L  ERROR_INVALID_EA_HANDLE               The specified EA handle is
	                                           invalid.
	282L  ERROR_EAS_NOT_SUPPORTED               The mounted file system does
	                                           not support extended
	                                           attributes.
	288L  ERROR_NOT_OWNER                       Attempt to release mutex not
	                                           owned by caller.
	298L  ERROR_TOO_MANY_POSTS                  Too many posts made to a
	                                           semaphore.
	299L  ERROR_PARTIAL_COPY                    Only part of a
	                                           Read/WriteProcessMemory
	                                           request was completed.
	317L  ERROR_MR_MID_NOT_FOUND                The system cannot find message
	                                           for message number 0x%1 in
	                                           message file for %2.
	487L  ERROR_INVALID_ADDRESS                 Attempt to access invalid
	                                           address.
	534L  ERROR_ARITHMETIC_OVERFLOW             Arithmetic result exceeded 32-
	                                           bits.
	535L  ERROR_PIPE_CONNECTED                  There is a process on other
	                                           end of the pipe.
	536L  ERROR_PIPE_LISTENING                  Waiting for a process to open
	                                           the other end of the pipe.
	994L  ERROR_EA_ACCESS_DENIED                Access to the EA is denied.
	995L  ERROR_OPERATION_ABORTED               The I/O operation was aborted
	                                           due to either thread exit or
	                                           application request.
	996L  ERROR_IO_INCOMPLETE                   Overlapped IO event not in
	                                           signaled state.
	997L  ERROR_IO_PENDING                      Overlapped IO operation in
	                                           progress.
	998L  ERROR_NOACCESS                        Invalid access to memory
	                                           location.
	999L  ERROR_SWAPERROR                       Error accessing paging file.
	1001L ERROR_STACK_OVERFLOW                  Recursion too deep, stack
	                                           overflowed.
	1002L ERROR_INVALID_MESSAGE                 Window can't handle sent
	                                           message.
	1003L ERROR_CAN_NOT_COMPLETE                Cannot complete function for
	                                           some reason.
	1004L ERROR_INVALID_FLAGS                   The flags are invalid.
	1005L ERROR_UNRECOGNIZED_VOLUME             The volume does not contain a
	                                           recognized file system. Make
	                                           sure that all required file
	                                           system drivers are loaded and
	                                           the volume is not damaged.
	1006L ERROR_FILE_INVALID                    The volume for a file was
	                                           externally altered and the
	                                           opened file is no longer
	                                           valid.
	1007L ERROR_FULLSCREEN_MODE                 The requested operation cannot
	                                           be performed in full-screen
	                                           mode.
	1008L ERROR_NO_TOKEN                        An attempt was made to
	                                           reference a token that does
	                                           not exist.
	1009L ERROR_BADDB                           The configuration registry
	                                           database is damaged.
	1010L ERROR_BADKEY                          The configuration registry key
	                                           is invalid.
	1011L ERROR_CANTOPEN                        The configuration registry key
	                                           cannot be opened.
	1012L ERROR_CANTREAD                        The configuration registry key
	                                           cannot be read.
	1013L ERROR_CANTWRITE                       The configuration registry key
	                                           cannot be written.
	1014L ERROR_REGISTRY_RECOVERED              One of the files containing
	                                           the system's registry data had
	                                           to be recovered by use of a
	                                           log or alternate copy. The
	                                           recovery succeeded.
	1015L ERROR_REGISTRY_CORRUPT                The registry is damaged. The
	                                           structure of one of the files
	                                           that contains registry data is
	                                           damaged, or the system's in
	                                           memory image of the file is
	                                           damaged, or the file could not
	                                           be recovered because its
	                                           alternate copy or log was
	                                           absent or damaged.
	1016L ERROR_REGISTRY_IO_FAILED              The registry initiated an I/O
	                                           operation that had an
	                                           unrecoverable failure. The
	                                           registry could not read in, or
	                                           write out, or flush, one of
	                                           the files that contain the
	                                           system's image of the
	                                           registry.
	1017L ERROR_NOT_REGISTRY_FILE               The system attempted to load
	                                           or restore a file into the
	                                           registry, and the specified
	                                           file is not in the format of a
	                                           registry file.
	1018L ERROR_KEY_DELETED                     Illegal operation attempted on
	                                           a registry key that has been
	                                           marked for deletion.
	1019L ERROR_NO_LOG_SPACE                    System could not allocate
	                                           required space in a registry
	                                           log.
	1020L ERROR_KEY_HAS_CHILDREN                An attempt was made to create
	                                           a symbolic link in a registry
	                                           key that already has subkeys
	                                           or values.
	1021L ERROR_CHILD_MUST_BE_VOLATILE          An attempt was made to create
	                                           a stable subkey under a
	                                           volatile parent key.
	1022L ERROR_NOTIFY_ENUM_DIR                 This indicates that a notify
	                                           change request is being
	                                           completed and the information
	                                           is not being returned in the
	                                           caller's buffer. The caller
	                                           now needs to enumerate the
	                                           files to find the changes.
	1051L ERROR_DEPENDENT_SERVICES_RUNNING      A stop control has been sent
	                                           to a service which other
	                                           running services are dependent
	                                           on.
	1052L ERROR_INVALID_SERVICE_CONTROL         The requested control is not
	                                           valid for this service.
	1053L ERROR_SERVICE_REQUEST_TIMEOUT         The service did not respond to
	                                           the start or control request
	                                           in a timely fashion.
	1054L ERROR_SERVICE_NO_THREAD               A thread could not be created
	                                           for the service.
	1055L ERROR_SERVICE_DATABASE_LOCKED         The service database is
	                                           locked.
	1056L ERROR_SERVICE_ALREADY_RUNNING         An instance of the service is
	                                           already running.
	1057L ERROR_INVALID_SERVICE_ACCOUNT         The account name is invalid or
	                                           does not exist.
	1058L ERROR_SERVICE_DISABLED                The specified service is
	                                           disabled and cannot be
	                                           started.
	1059L ERROR_CIRCULAR_DEPENDENCY             Circular service dependency
	                                           was specified.
	1060L ERROR_SERVICE_DOES_NOT_EXIST          The specified service does not
	                                           exist as an installed service.
	1061L ERROR_SERVICE_CANNOT_ACCEPT_CTRL      The service cannot accept
	                                           control messages at this time.
	1062L ERROR_SERVICE_NOT_ACTIVE              The service has not been
	                                           started.
	1063L ERROR_FAILED_SERVICE_CONTROLLER_CONNECT  The service process could
	                                           not connect to the service
	                                           controller.
	1064L ERROR_EXCEPTION_IN_SERVICE            An exception occurred in the
	                                           service when handling the
	                                           control request.
	1065L ERROR_DATABASE_DOES_NOT_EXIST         The database specified does
	                                           not exist.
	1066L ERROR_SERVICE_SPECIFIC_ERROR          The service has returned a
	                                           service-specific error code.
	1067L ERROR_PROCESS_ABORTED                 The process terminated
	                                           unexpectedly.
	1068L ERROR_SERVICE_DEPENDENCY_FAIL         The dependency service or
	                                           group failed to start.
	1069L ERROR_SERVICE_LOGON_FAILED            The service did not start due
	                                           to a logon failure.
	1070L ERROR_SERVICE_START_HANG              After starting, the service
	                                           hung in a start-pending state.
	1071L ERROR_INVALID_SERVICE_LOCK            The specified service database
	                                           lock is invalid.
	1072L ERROR_SERVICE_MARKED_FOR_DELETE       The specified service has been
	                                           marked for deletion.
	1073L ERROR_SERVICE_EXISTS                  The specified service already
	                                           exists.
	1074L ERROR_ALREADY_RUNNING_LKG             The system is currently
	                                           running with the last-known-
	                                           good configuration.
	1075L ERROR_SERVICE_DEPENDENCY_DELETED      The dependency service does
	                                           not exist or has been marked
	                                           for deletion.
	1076L ERROR_BOOT_ALREADY_ACCEPTED           The current boot has already
	                                           been accepted for use as the
	                                           last-known-good control set.
	1077L ERROR_SERVICE_NEVER_STARTED           No attempts to start the
	                                           service have been made since
	                                           the last boot.
	1078L ERROR_DUPLICATE_SERVICE_NAME          The name is already in use as
	                                           either a service name or a
	                                           service display name.
	1079L ERROR_DIFFERENT_SERVICE_ACCOUNT       The account specified for this
	                                           service is different from the
	                                           account specified for other
	                                           services running in the same
	                                           process.
	1100L ERROR_END_OF_MEDIA                    The physical end of the tape
	                                           has been reached.
	1101L ERROR_FILEMARK_DETECTED               A tape access reached a
	                                           filemark.
	1102L ERROR_BEGINNING_OF_MEDIA              The beginning of the tape or
	                                           partition was encountered.
	1103L ERROR_SETMARK_DETECTED                A tape access reached a
	                                           setmark.
	1104L ERROR_NO_DATA_DETECTED                During a tape access, the end
	                                           of the data marker was
	                                           reached.
	1105L ERROR_PARTITION_FAILURE               Tape could not be partitioned.
	1106L ERROR_INVALID_BLOCK_LENGTH            When accessing a new tape of a
	                                           multivolume partition, the
	                                           current block size is
	                                           incorrect.
	1107L ERROR_DEVICE_NOT_PARTITIONED          Tape partition information
	                                           could not be found when
	                                           loading a tape.
	1108L ERROR_UNABLE_TO_LOCK_MEDIA            Attempt to lock the eject
	                                           media mechanism failed.
	1109L ERROR_UNABLE_TO_UNLOAD_MEDIA          Unload media failed.
	1110L ERROR_MEDIA_CHANGED                   Media in drive may have
	                                           changed.
	1111L ERROR_BUS_RESET                       The I/O bus was reset.
	1112L ERROR_NO_MEDIA_IN_DRIVE               Tape query failed because of
	                                           no media in drive.
	1113L ERROR_NO_UNICODE_TRANSLATION          No mapping for the Unicode
	                                           character exists in the target
	                                           multi-byte code page.
	1114L ERROR_DLL_INIT_FAILED                 A DLL initialization routine
	                                           failed.
	1115L ERROR_SHUTDOWN_IN_PROGRESS            A system shutdown is in
	                                           progress.
	1116L ERROR_NO_SHUTDOWN_IN_PROGRESS         An attempt to abort the
	                                           shutdown of the system failed
	                                           because no shutdown was in
	                                           progress.
	1117L ERROR_IO_DEVICE                       The request could not be
	                                           performed because of an I/O
	                                           device error.
	1118L ERROR_SERIAL_NO_DEVICE                No serial device was
	                                           successfully initialized. The
	                                           serial driver will unload.
	1119L ERROR_IRQ_BUSY                        Unable to open a device that
	                                           was sharing an interrupt
	                                           request (IRQ) with other
	                                           devices. At least one other
	                                           device that uses that IRQ was
	                                           already opened.
	1120L ERROR_MORE_WRITES                     A serial I/O operation was
	                                           completed by another write to
	                                           the serial port. (The
	                                           IOCTL_SERIAL_XOFF_COUNTER
	                                           reached zero.)
	1121L ERROR_COUNTER_TIMEOUT                 A serial I/O operation
	                                           completed because the time-out
	                                           period expired. (The
	                                           IOCTL_SERIAL_XOFF_COUNTER did
	                                           not reach zero.)
	1122L ERROR_FLOPPY_ID_MARK_NOT_FOUND        No ID address mark was found
	                                           on the floppy disk.
	1123L ERROR_FLOPPY_WRONG_CYLINDER           Mismatch between the floppy
	                                           disk sector ID field and the
	                                           floppy disk controller track
	                                           address.
	1124L ERROR_FLOPPY_UNKNOWN_ERROR            The floppy disk controller
	                                           reported an error that is not
	                                           recognized by the floppy disk
	                                           driver.
	1125L ERROR_FLOPPY_BAD_REGISTERS            The floppy disk controller
	                                           returned inconsistent results
	                                           in its registers.
	1126L ERROR_DISK_RECALIBRATE_FAILED         While accessing the hard disk,
	                                           a recalibrate operation
	                                           failed, even after retries.
	1127L ERROR_DISK_OPERATION_FAILED           While accessing the hard disk,
	                                           a disk operation failed even
	                                           after retries.
	1128L ERROR_DISK_RESET_FAILED               While accessing the hard disk,
	                                           a disk controller reset was
	                                           needed, but even that failed.
	1129L ERROR_EOM_OVERFLOW                    Physical end of tape
	                                           encountered.
	1130L ERROR_NOT_ENOUGH_SERVER_MEMORY        Not enough server storage is
	                                           available to process this
	                                           command.
	1131L ERROR_POSSIBLE_DEADLOCK               A potential deadlock condition
	                                           has been detected.
	1132L ERROR_MAPPED_ALIGNMENT                The base address or the file
	                                           offset specified does not have
	                                           the proper alignment.
	1140L ERROR_SET_POWER_STATE_VETOED          An attempt to change the
	                                           system power state was vetoed
	                                           by another application or
	                                           driver.
	1141L ERROR_SET_POWER_STATE_FAILED          The system BIOS failed an
	                                           attempt to change the system
	                                           power state.
	1142L ERROR_TOO_MANY_LINKS                  An attempt was made to create
	                                           more links on a file than the
	                                           file system supports.
	1150L ERROR_OLD_WIN_VERSION                 The specified program requires
	                                           a newer version of Windows.
	1151L ERROR_APP_WRONG_OS                    The specified program is not a
	                                           Windows or MS-DOS program.
	1152L ERROR_SINGLE_INSTANCE_APP             Cannot start more than one
	                                           instance of the specified
	                                           program.
	1153L ERROR_RMODE_APP                       The specified program was
	                                           written for an older version
	                                           of Windows.
	1154L ERROR_INVALID_DLL                     One of the library files
	                                           needed to run this application
	                                           is damaged.
	1155L ERROR_NO_ASSOCIATION                  No application is associated
	                                           with the specified file for
	                                           this operation.
	1156L ERROR_DDE_FAIL                        An error occurred in sending
	                                           the command to the
	                                           application.
	1157L ERROR_DLL_NOT_FOUND                   One of the library files
	                                           needed to run this application
	                                           cannot be found.
	1200L ERROR_BAD_DEVICE                      The specified device name is
	                                           invalid.
	1201L ERROR_CONNECTION_UNAVAIL              The device is not currently
	                                           connected but is a remembered
	                                           connection.
	1202L ERROR_DEVICE_ALREADY_REMEMBERED       An attempt was made to
	                                           remember a device that was
	                                           previously remembered.
	1203L ERROR_NO_NET_OR_BAD_PATH              No network provider accepted
	                                           the given network path.
	1204L ERROR_BAD_PROVIDER                    The specified network provider
	                                           name is invalid.
	1205L ERROR_CANNOT_OPEN_PROFILE             Unable to open the network
	                                           connection profile.
	1206L ERROR_BAD_PROFILE                     The network connection profile
	                                           is damaged.
	1207L ERROR_NOT_CONTAINER                   Cannot enumerate a non-
	                                           container.
	1208L ERROR_EXTENDED_ERROR                  An extended error has
	                                           occurred.
	1209L ERROR_INVALID_GROUPNAME               The format of the specified
	                                           group name is invalid.
	1210L ERROR_INVALID_COMPUTERNAME            The format of the specified
	                                           computer name is invalid.
	1211L ERROR_INVALID_EVENTNAME               The format of the specified
	                                           event name is invalid.
	1212L ERROR_INVALID_DOMAINNAME              The format of the specified
	                                           domain name is invalid.
	1213L ERROR_INVALID_SERVICENAME             The format of the specified
	                                           service name is invalid.
	1214L ERROR_INVALID_NETNAME                 The format of the specified
	                                           network name is invalid.
	1215L ERROR_INVALID_SHARENAME               The format of the specified
	                                           share name is invalid.
	1216L ERROR_INVALID_PASSWORDNAME            The format of the specified
	                                           password is invalid.
	1217L ERROR_INVALID_MESSAGENAME             The format of the specified
	                                           message name is invalid.
	1218L ERROR_INVALID_MESSAGEDEST             The format of the specified
	                                           message destination is
	                                           invalid.
	1219L ERROR_SESSION_CREDENTIAL_CONFLICT     The credentials supplied
	                                           conflict with an existing set
	                                           of credentials.
	1220L ERROR_REMOTE_SESSION_LIMIT_EXCEEDED   An attempt was made to
	                                           establish a session to a LAN
	                                           Manager server, but there are
	                                           already too many sessions
	                                           established to that server.
	1221L ERROR_DUP_DOMAINNAME                  The workgroup or domain name
	                                           is already in use by another
	                                           computer on the network.
	1222L ERROR_NO_NETWORK                      The network is not present or
	                                           not started.
	1223L ERROR_CANCELLED                       The operation was cancelled by
	                                           the user.
	1224L ERROR_USER_MAPPED_FILE                The requested operation cannot
	                                           be performed on a file with a
	                                           user mapped section open.
	1225L ERROR_CONNECTION_REFUSED              The remote system refused the
	                                           network connection.
	1226L ERROR_GRACEFUL_DISCONNECT             The network connection was
	                                           gracefully closed.
	1227L ERROR_ADDRESS_ALREADY_ASSOCIATED      The network transport endpoint
	                                           already has an address
	                                           associated with it.
	1228L ERROR_ADDRESS_NOT_ASSOCIATED          An address has not yet been
	                                           associated with the network
	                                           endpoint.
	1229L ERROR_CONNECTION_INVALID              An operation was attempted on
	                                           a non-existent network
	                                           connection.
	1230L ERROR_CONNECTION_ACTIVE               An invalid operation was
	                                           attempted on an active network
	                                           connection.
	1231L ERROR_NETWORK_UNREACHABLE             The remote network is not
	                                           reachable by the transport.
	1232L ERROR_HOST_UNREACHABLE                The remote system is not
	                                           reachable by the transport.
	1233L ERROR_PROTOCOL_UNREACHABLE            The remote system does not
	                                           support the transport
	                                           protocol.
	1234L ERROR_PORT_UNREACHABLE                No service is operating at the
	                                           destination network endpoint
	                                           on the remote system.
	1235L ERROR_REQUEST_ABORTED                 The request was aborted.
	1236L ERROR_CONNECTION_ABORTED              The network connection was
	                                           aborted by the local system.
	1237L ERROR_RETRY                           The operation could not be
	                                           completed. A retry should be
	                                           performed.
	1238L ERROR_CONNECTION_COUNT_LIMIT          A connection to the server
	                                           could not be made because the
	                                           limit on the number of
	                                           concurrent connections for
	                                           this account has been reached.
	1239L ERROR_LOGIN_TIME_RESTRICTION          Attempting to login during an
	                                           unauthorized time of day for
	                                           this account.
	1240L ERROR_LOGIN_WKSTA_RESTRICTION         The account is not authorized
	                                           to login from this station.
	1241L ERROR_INCORRECT_ADDRESS               The network address could not
	                                           be used for the operation
	                                           requested.
	1242L ERROR_ALREADY_REGISTERED              The service is already
	                                           registered.
	1243L ERROR_SERVICE_NOT_FOUND               The specified service does not
	                                           exist.
	1244L ERROR_NOT_AUTHENTICATED               The operation being requested
	                                           was not performed because the
	                                           user has not been
	                                           authenticated.
	1245L ERROR_NOT_LOGGED_ON                   The operation being requested
	                                           was not performed because the
	                                           user has not logged on to the
	                                           network.
	1246L ERROR_CONTINUE                        Return that wants caller to
	                                           continue with work in
	                                           progress.
	1247L ERROR_ALREADY_INITIALIZED             An attempt was made to perform
	                                           an initialization operation
	                                           when initialization has
	                                           already been completed.
	1248L ERROR_NO_MORE_DEVICES                 No more local devices.
	
	
	Additional query words: prodnt sysdiff.exe unattended setup
	
	======================================================================
	Keywords          : kberrmsg kbOPK kbSBK 
	Technology        : kbWinNTsearch kbWinNTWsearch kbWinNTSsearch
	Version           : :
	Issue type        : kbinfo
	
	=============================================================================
	
