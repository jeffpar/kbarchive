---
layout: page
title: "Q135927: MHS: Command Line Options"
permalink: kb/135/Q135927/
---

## Q135927: MHS: Command Line Options

	Article: Q135927
	Product(s): Microsoft Mail For PC Networks
	Version(s): MS-DOS:3.0
	Operating System(s): 
	Keyword(s): 
	Last Modified: 26-FEB-2000
	
	-------------------------------------------------------------------------------
	The information in this article applies to:
	
	- Microsoft Mail Gateway to MHS, version 3.0 
	-------------------------------------------------------------------------------
	
	SUMMARY
	=======
	
	You can specify how the Mail Gateway to MHS will function by using the
	command-line options available with the gateway. These options are used in the
	COMMAND option of the gateway definition on the MHS system.
	
	You can find information on adding gateway definitions to the MHS system in the
	Novell's MHS "Administrator's Guide."
	
	MORE INFORMATION
	================
	
	The available MHS Gateway commands are as follows:
	
	
	The available MHS Gateway commands are as follows:
	
	Option         Definition
	----------------------------------------------------------------------
	
	-Dm            Drive option specifies the driver letter containing the
	              Microsoft Mail data files. Drive letter M is the default
	              drive, but in a case that Maildata is mapped to a different
	              drive letter, that letter would need to be specified. For
	              example, if Maildata was mapped to drive P, use -Dp.
	
	-F             Dashed Address Format option is used with an MHS 1.11 host
	              only. When this option is used, the MSMAIL address in the
	              FROM field of an outgoing message is converted to the dashed
	              address format. This is ignored if the gateway is on an MHS
	              host 1.21 or later. Also when you use this option all
	              components of the 10/10/10 address must be Name-8 strings.
	              If not, the gateway will use full extended addressing.
	
	-FS            Simple Address Format option specifies that the gateway
	              should use the simple address format MAILBOX@GATEWAY when
	              converting MSMAIL addresses to the MHS addresses. To use
	              this option, the MAILBOX portion of the MSMAIL address must
	              be in Name-8 string; otherwise the extended address format
	              is used. Also the simple address format is only supported
	              for users on a gateway postoffice. This option is ignore if
	              the sender is on a downstream postoffice and the uses the
	              default extended address format.
	
	-H             Show All Headers option is used to force the display of all
	              MHS headers in incoming mail. This option is normally only
	              used in testing the gateway operation.
	
	-HA            Expose Hidden Attachments option is used to expose the
	              hidden attachments generated the MSMAIL system. These
	              attachments contain information about OLE objects.
	
	-In            Items option specifies the maximum number of mail messages
	              to process each time the program is invoked by the MHS
	              system. The default is I5 (5 messages). The maximum
	              allowable setting is I50 (50 messages); anything greater
	              is ignored.
	
	-L[filename]   Log Error Messages option specifies the name of the file to
	              which error messages will be logged. Type the full path,
	              including the driver, directory, filename, and extension. If
	              you do not specify a parameter or if you enter only -L,
	              error messages are logged to the M:\LOG\MHSGATE.LOG (unless
	              you specify another driver the -D option)
	
	-Mn            Maximum Text Size option sets the maximum size of the
	              messages text allowed by the gateway, where n is the maximum
	              size in kilobytes. When a messages exceeds this size, the
	              gateway converts the message text to an attachments. If you
	              are using message encapsulation to send backboned mail (the
	              default) and the message text exceeds the limit, the
	              messages is not encapsulated.
	
	-RE            Remove Encapsulation option is used to disable message
	              encapsulation for outgoing mail. By default, all backboned
	              mail (mail destined for postoffices defined as indirect via
	              MHS and for which address mapping has been defined) is sent
	              in encapsulated form to preserve all attributes of the
	              MSMAIL message sent via MHS.
	
	-Sn            Split Lines option allows you to specify where to split
	              long message lines by entering the number of characters per
	              line. MSMAIL can generate messages with lines up to 78
	              characters. Some MHS user agents can handle lines up to 74
	              characters. For outgoing mail (INPOST program), the default
	              is to not split lines at all. For incoming mail (OUTPOST
	              program), the default is to split lines at 78 characters.
	
	-T             Use Mail Item Time option is recognized only by the OUTPOST
	              program. For mail sent to MSMAIL from MHS, you can specify
	              that you want to use the date, and time of the mail item
	              getting received by the MSMAIL instead of the system date
	              and time.
	
	-V20           Backwards Compatibility option must be used if the Gateway
	              to MHS is installed on a postoffice that uses version 2.1 or
	              later of the External Mail program, but is also accessed by
	              a version 2.0 External program or by any version 2.;0 MSMAIL
	              gateway program. If you do not require compatibility with
	              version 2.0 programs, do not use this option.
	
	For additional information, see pages 19-21 of the Microsoft Mail Gateway to MHS
	"Administrator's Guide."
	
	Additional query words: 3.00 parameters
	
	======================================================================
	Keywords          :  
	Technology        : kbMailSearch kbMailGateSearch kbZNotKeyword3 kbMailGateMHS300
	Version           : MS-DOS:3.0
	
	=============================================================================
	
